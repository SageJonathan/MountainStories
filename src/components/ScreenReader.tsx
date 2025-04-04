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
      // Log all environment variables for debugging
      console.log("All environment variables:", import.meta.env);
      console.log("AWS Region:", import.meta.env.VITE_AWS_REGION);
      console.log("AWS Access Key ID:", import.meta.env.VITE_AWS_ACCESS_KEY_ID);
      console.log(
        "AWS Secret Access Key exists:",
        !!import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
      );

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

  const synthesizeSpeech = async (isDownload: boolean = false) => {
    if (!polly) {
      setError("Speech service is not available");
      return;
    }

    try {
      if (isDownload) {
        setIsDownloading(true);
      } else {
        setIsLoading(true);
      }
      setError(null);

      console.log("Starting speech synthesis...");

      const command = new SynthesizeSpeechCommand({
        Text: content,
        OutputFormat: "mp3",
        VoiceId: "Danielle",
        Engine: "neural",
        TextType: "text",
        SampleRate: "24000",
        LanguageCode: "en-US",
      });

      console.log("Synthesizing with params:", command.input);
      const response = await polly.send(command);
      console.log("Speech synthesis completed");

      if (!response.AudioStream) {
        throw new Error("No audio stream received from Polly");
      }

      const audioBlob = new Blob(
        [await response.AudioStream.transformToByteArray()],
        { type: "audio/mpeg" }
      );

      if (isDownload) {
        const url = URL.createObjectURL(audioBlob);
        const link = document.createElement("a");
        link.href = url;
        const filename = `${title.toLowerCase().replace(/\s+/g, "-")}.mp3`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsDownloading(false);
      } else {
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
      console.error("Error:", error);
      setError("Failed to process audio. Please try again.");
      setIsReading(false);
      setIsLoading(false);
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
      await synthesizeSpeech(false);
    }
  };

  const handleDownload = () => {
    synthesizeSpeech(true);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
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
