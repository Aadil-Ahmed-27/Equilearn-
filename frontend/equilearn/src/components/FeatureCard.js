// src/components/FeatureCard.js
import React from "react";

function FeatureCard({ icon, title, description }) {
  return React.createElement(
    "div",
    { className: "feature-card" },
    React.createElement(
      "div",
      { className: "feature-card-content" },
      React.createElement(
        "div",
        { className: "feature-icon" },
        icon
      ),
      React.createElement(
        "h3",
        null,
        title
      ),
      React.createElement(
        "p",
        null,
        description
      )
    )
  );
}

export default FeatureCard;