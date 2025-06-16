// src/components/VoiceCommandButton.js
import React from "react";
import { useVoiceCommand } from "../hooks/useVoiceCommand";

function VoiceCommandButton() {
  const { isRecording, startRecording, stopRecording } = useVoiceCommand();

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return React.createElement(
    "button",
    {
      className: `voice-cmd-btn ${isRecording ? "active" : ""}`,
      onClick: handleClick,
      title: isRecording ? "Stop Recording" : "Click to use voice commands",
      "aria-label": isRecording ? "Stop Recording" : "Voice Command",
    },
    React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      isRecording
        ? [
            // Stop icon
            React.createElement("rect", {
              key: "stop",
              x: "6",
              y: "6",
              width: "12",
              height: "12",
              rx: "1",
              ry: "1",
            }),
          ]
        : [
            // Mic icon
            React.createElement("path", {
              key: "mic-path",
              d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
            }),
            React.createElement("path", {
              key: "mic-base",
              d: "M19 10v2a7 7 0 0 1-14 0v-2",
            }),
            React.createElement("line", {
              key: "mic-line",
              x1: "12",
              y1: "19",
              x2: "12",
              y2: "23",
            }),
            React.createElement("line", {
              key: "mic-line-2",
              x1: "8",
              y1: "23",
              x2: "16",
              y2: "23",
            }),
          ]
    )
  );
}

export default VoiceCommandButton;