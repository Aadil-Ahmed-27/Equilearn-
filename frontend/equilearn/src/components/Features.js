// src/components/Features.js
import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: React.createElement(
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
        React.createElement("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
        React.createElement("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
        React.createElement("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
        React.createElement("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
      ),
      title: "Voice Commands",
      description: "Navigate through the platform, search for content, and control playback using just your voice."
    },
    {
      icon: React.createElement(
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
        React.createElement("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
        React.createElement("polyline", { points: "14 2 14 8 20 8" }),
        React.createElement("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        React.createElement("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
        React.createElement("polyline", { points: "10 9 9 9 8 9" })
      ),
      title: "Comprehensive Materials",
      description: "Access lecture notes, assignments, and supplementary resources all in one place."
    },
    {
      icon: React.createElement(
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
        React.createElement("polygon", { points: "23 7 16 12 23 17 23 7" }),
        React.createElement("rect", { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" })
      ),
      title: "High-Quality Videos",
      description: "Watch instructor videos with clear explanations and demonstrations of concepts."
    },
    {
      icon: React.createElement(
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
        React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
        React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
        React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
        React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
      ),
      title: "Community Learning",
      description: "Join discussion forums and collaborate with fellow students on projects and assignments."
    },
    {
      icon: React.createElement(
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
        React.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
      ),
      title: "Track Progress",
      description: "Monitor your learning journey with detailed progress tracking and performance analytics."
    },
    {
      icon: React.createElement(
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
        React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })
      ),
      title: "Certification",
      description: "Earn certificates upon course completion to showcase your newly acquired skills."
    }
  ];

  return React.createElement(
    "section",
    { className: "features section" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        { className: "section-title" },
        "Platform Features"
      ),
      React.createElement(
        "div",
        { className: "features-grid" },
        features.map((feature, index) =>
          React.createElement(FeatureCard, {
            key: index,
            icon: feature.icon,
            title: feature.title,
            description: feature.description
          })
        )
      )
    )
  );
}

export default Features;