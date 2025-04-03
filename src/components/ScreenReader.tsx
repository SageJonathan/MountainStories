import React, { useState, useEffect, useRef } from "react";

interface ScreenReaderProps {
  content: string;
}

const ScreenReader: React.FC<ScreenReaderProps> = ({ content }) => {
  const [isReading, setIsReading] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const synthesisRef = useRef<typeof window.speechSynthesis | null>(null);

  // Function to initialize speech synthesis
  const initializeSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      synthesisRef.current = window.speechSynthesis;

      // Create a new utterance
      const utterance = new SpeechSynthesisUtterance(content);

      // Configure the utterance for a more natural reading experience
      utterance.rate = 0.95; // Slightly slower for better clarity
      utterance.pitch = 1.05; // Slightly higher for more engaging tone
      utterance.volume = 1.0; // Full volume

      // Get available voices
      const voices = window.speechSynthesis.getVoices();

      // List of preferred voices in order of preference
      const preferredVoices = [
        "Google UK English Female", // Natural and clear
        "Microsoft Zira Desktop", // Professional and clear
        "Microsoft Hazel Desktop", // Warm and engaging
        "Google US English Female", // Natural and expressive
        "Samantha", // Apple's high-quality voice
        "Microsoft David Desktop", // Clear male voice
        "Microsoft Mark Desktop", // Professional male voice
        "Google UK English Male", // Natural male voice
        "Google US English Male", // Natural male voice
      ];

      // Try to find the best available voice
      const selectedVoice = voices.find((voice) =>
        preferredVoices.includes(voice.name)
      );

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      } else if (voices.length > 0) {
        // If no preferred voice is found, try to find a natural-sounding voice
        const naturalVoice = voices.find(
          (voice) =>
            voice.name.toLowerCase().includes("natural") ||
            voice.name.toLowerCase().includes("female") ||
            voice.name.toLowerCase().includes("english")
        );

        if (naturalVoice) {
          utterance.voice = naturalVoice;
        } else {
          // Fallback to first available voice
          utterance.voice = voices[0];
        }
      }

      // Set up event handlers
      utterance.onend = () => {
        setIsReading(false);
        utteranceRef.current = null;
      };

      utterance.onerror = (event) => {
        // Only log non-interruption errors
        if (event.error !== "interrupted") {
          console.error("Speech synthesis error:", event);
        }
        setIsReading(false);
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      // Function to load voices
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          setVoicesLoaded(true);
          initializeSpeech(); // Initialize speech when voices are loaded
        }
      };

      // Initial load
      loadVoices();

      // Add event listener for when voices are loaded
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

      return () => {
        window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
        if (synthesisRef.current) {
          synthesisRef.current.cancel();
        }
        utteranceRef.current = null;
      };
    }
  }, []);

  // Reinitialize speech when content changes (navigation)
  useEffect(() => {
    if (voicesLoaded) {
      initializeSpeech();
    }
  }, [content, voicesLoaded]);

  const toggleReading = () => {
    if (!utteranceRef.current || !synthesisRef.current) return;

    if (isReading) {
      synthesisRef.current.pause();
    } else {
      if (synthesisRef.current.paused) {
        synthesisRef.current.resume();
      } else {
        synthesisRef.current.cancel(); // Cancel any ongoing speech
        synthesisRef.current.speak(utteranceRef.current);
      }
    }
    setIsReading(!isReading);
  };

  return (
    <button
      className="screen-reader-button"
      onClick={toggleReading}
      aria-label={isReading ? "Pause reading" : "Start reading"}
      disabled={!voicesLoaded}
    >
      <i className={`fas fa-${isReading ? "pause" : "play"}`}></i>
      <span>{isReading ? "Pause Reading" : "Start Reading"}</span>
    </button>
  );
};

export default ScreenReader;
