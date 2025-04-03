import React, { useState, useEffect, useRef } from "react";

interface ScreenReaderProps {
  content: string;
}

const ScreenReader: React.FC<ScreenReaderProps> = ({ content }) => {
  const [isReading, setIsReading] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      // Create a new utterance
      const utterance = new SpeechSynthesisUtterance(content);

      // Configure the utterance
      utterance.rate = 1.0; // Normal speed
      utterance.pitch = 1.0; // Normal pitch
      utterance.volume = 1.0; // Full volume

      // Set up event handlers
      utterance.onend = () => {
        setIsReading(false);
        utteranceRef.current = null;
      };

      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event);
        setIsReading(false);
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
    }

    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
        utteranceRef.current = null;
      }
    };
  }, [content]);

  const toggleReading = () => {
    if (!utteranceRef.current) return;

    if (isReading) {
      window.speechSynthesis.pause();
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        window.speechSynthesis.speak(utteranceRef.current);
      }
    }
    setIsReading(!isReading);
  };

  return (
    <button
      className="screen-reader-button"
      onClick={toggleReading}
      aria-label={isReading ? "Pause reading" : "Start reading"}
    >
      <i className={`fas fa-${isReading ? "pause" : "play"}`}></i>
      <span>{isReading ? "Pause Reading" : "Start Reading"}</span>
    </button>
  );
};

export default ScreenReader;
