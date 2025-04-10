import React, { useState, useEffect, useRef } from "react";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

interface ScreenReaderProps {
  content: string;
  title?: string;
}

const ScreenReader: React.FC<ScreenReaderProps> = ({
  content,
  title = "story",
}) => {
  const [isReading, setIsReading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize AWS Polly with error handling
  const initializePolly = () => {
    try {
      if (
        !import.meta.env.VITE_AWS_ACCESS_KEY_ID ||
        !import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
      ) {
        throw new Error(
          "AWS credentials are missing. Please check your .env file."
        );
      }

      return new PollyClient({
        region: import.meta.env.VITE_AWS_REGION || "ca-central-1",
        credentials: {
          accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
          secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
        },
      });
    } catch (err) {
      console.error("Error initializing Polly:", err);
      setError(
        "Failed to initialize speech service. Please check your credentials."
      );
      return null;
    }
  };

  const polly = initializePolly();

  const synthesizeSpeechForPlayback = async () => {
    if (!polly) {
      setError("Speech service is not available");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Split content into chunks to avoid TextLengthExceededException
      const maxLength = 3000; // Adjust based on AWS Polly limits
      const contentChunks = [];
      for (let i = 0; i < content.length; i += maxLength) {
        contentChunks.push(content.slice(i, i + maxLength));
      }

      // Stream the first chunk for immediate playback
      const firstChunk = contentChunks.shift();
      if (firstChunk) {
        const command = new SynthesizeSpeechCommand({
          Text: firstChunk,
          OutputFormat: "mp3",
          VoiceId: "Danielle",
          Engine: "neural",
          TextType: "text",
          SampleRate: "24000",
          LanguageCode: "en-US",
        });

        const response = await polly.send(command);

        if (!response.AudioStream) {
          throw new Error("No audio stream received from Polly");
        }

        const audioBlob = new Blob(
          [await response.AudioStream.transformToByteArray()],
          { type: "audio/mpeg" }
        );

        // Play the first chunk
        const audioUrl = URL.createObjectURL(audioBlob);
        if (!audioRef.current) {
          audioRef.current = new Audio();
        }
        audioRef.current.src = audioUrl;
        audioRef.current.onended = () => {
          setIsReading(false);
          setIsLoading(false);
        };
        audioRef.current.onerror = (err) => {
          console.error("Audio playback error:", err);
          setError("Error playing audio");
          setIsReading(false);
          setIsLoading(false);
        };
        await audioRef.current.play();
        setIsReading(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during speech synthesis:", error);
      setError("Failed to process audio. Please try again.");
      setIsReading(false);
      setIsLoading(false);
    }
  };

  const synthesizeSpeechForDownload = async () => {
    if (!polly) {
      setError("Speech service is not available");
      return;
    }

    try {
      setIsDownloading(true);
      setError(null);

      // Split content into chunks to avoid TextLengthExceededException
      const maxLength = 3000; // Adjust based on AWS Polly limits
      const contentChunks = [];
      for (let i = 0; i < content.length; i += maxLength) {
        contentChunks.push(content.slice(i, i + maxLength));
      }

      const audioBlobs = [];

      // Fetch all chunks
      for (const chunk of contentChunks) {
        const command = new SynthesizeSpeechCommand({
          Text: chunk,
          OutputFormat: "mp3",
          VoiceId: "Danielle",
          Engine: "neural",
          TextType: "text",
          SampleRate: "24000",
          LanguageCode: "en-US",
        });

        const response = await polly.send(command);

        if (!response.AudioStream) {
          throw new Error("No audio stream received from Polly");
        }

        const audioBlob = new Blob(
          [await response.AudioStream.transformToByteArray()],
          { type: "audio/mpeg" }
        );
        audioBlobs.push(audioBlob);
      }

      // Concatenate all audio blobs
      const combinedBlob = new Blob(audioBlobs, { type: "audio/mpeg" });

      // Download the full audio
      const url = URL.createObjectURL(combinedBlob);
      const link = document.createElement("a");
      link.href = url;
      const filename = `${title.toLowerCase().replace(/\s+/g, "-")}.mp3`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsDownloading(false);
    } catch (error) {
      console.error("Error during speech synthesis:", error);
      setError("Failed to process audio. Please try again.");
      setIsDownloading(false);
    }
  };

  const toggleReading = async () => {
    if (isReading) {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsReading(false);
      }
    } else {
      await synthesizeSpeechForPlayback();
    }
  };

  const handleDownload = () => {
    synthesizeSpeechForDownload();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
      // Reset loading state
      setIsLoading(false);
      setIsDownloading(false);
      setIsReading(false);
    };
  }, []);

  return (
    <div className="screen-reader-container">
      <button
        className="screen-reader-button"
        onClick={toggleReading}
        aria-label={isReading ? "Pause reading" : "Start reading"}
        disabled={isLoading || isDownloading || !!error}
      >
        {isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <i className={`fas fa-${isReading ? "pause" : "play"}`}></i>
        )}
        <span>
          {isLoading
            ? "Loading..."
            : isReading
            ? "Pause Reading"
            : "Start Reading"}
        </span>
      </button>
      <button
        className="download-mp3-button"
        onClick={handleDownload}
        disabled={isLoading || isDownloading || !!error}
      >
        {isDownloading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <i className="fas fa-download"></i>
        )}
        <span>{isDownloading ? "Preparing MP3..." : "Download MP3"}</span>
      </button>
      {error && (
        <div className="screen-reader-error">
          <i className="fas fa-exclamation-circle"></i>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default ScreenReader;
