import React, { useState, useEffect } from "react";

interface ScreenReaderProps {
  content: string;
}

const ScreenReader: React.FC<ScreenReaderProps> = ({ content }) => {
  const [isReading, setIsReading] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const newUtterance = new SpeechSynthesisUtterance(content);
      newUtterance.onend = () => setIsReading(false);
      setUtterance(newUtterance);
    }

    return () => {
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, [content]);

  const toggleReading = () => {
    if (!utterance) return;

    if (isReading) {
      window.speechSynthesis.pause();
    } else {
      window.speechSynthesis.resume();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.speak(utterance);
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
