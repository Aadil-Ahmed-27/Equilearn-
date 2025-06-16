// src/hooks/useVoiceCommand.js

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { processVoiceCommand } from "../utils/api";

export function useVoiceCommand() {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const navigate = useNavigate();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        const command = await processVoiceCommand(audioBlob);

        handleCommand(command);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handleCommand = (command) => {
    const { action, target, data } = command;

    switch (action) {
      case "navigate":
        if (target) navigate(target);
        break;
      case "back":
        navigate(-1);
        break;
      case "home":
        navigate("/");
        break;
      case "search":
        if (data?.query) {
          alert(`Searching for: ${data.query}`); // Can be replaced with real search logic
        }
        break;
      default:
        alert("Unrecognized voice command.");
        break;
    }
  };

  return {
    isRecording,
    startRecording,
    stopRecording,
  };
}
