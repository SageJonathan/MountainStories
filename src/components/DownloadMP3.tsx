import React, { useState } from "react";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

interface DownloadMP3Props {
  content: string;
}

const DownloadMP3: React.FC<DownloadMP3Props> = ({ content }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const downloadMP3 = async () => {
    try {
      setIsDownloading(true);
      setError(null);

      // Initialize Polly client
      const polly = new PollyClient({
        region: import.meta.env.VITE_AWS_REGION || "ca-central-1",
        credentials: {
          accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
          secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
        },
      });

      // Create the command
      const command = new SynthesizeSpeechCommand({
        Text: content,
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

      // Convert the audio stream to a blob
      const audioBlob = new Blob(
        [await response.AudioStream.transformToByteArray()],
        { type: "audio/mpeg" }
      );

      // Create download link
      const url = URL.createObjectURL(audioBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "story.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsDownloading(false);
    } catch (error: any) {
      console.error("Error downloading MP3:", error);
      setError(error.message || "Failed to download MP3");
      setIsDownloading(false);
    }
  };

  return (
    <div className="download-mp3-container">
      <button
        className="download-mp3-button"
        onClick={downloadMP3}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            <span>Preparing MP3...</span>
          </>
        ) : (
          <>
            <i className="fas fa-download"></i>
            <span>Download MP3</span>
          </>
        )}
      </button>
      {error && (
        <div className="download-mp3-error">
          <i className="fas fa-exclamation-circle"></i>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default DownloadMP3;
