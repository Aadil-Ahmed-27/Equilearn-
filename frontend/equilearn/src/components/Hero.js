// src/components/Hero.js
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return React.createElement(
    "section",
    { className: "hero" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "hero-content" },
        React.createElement(
          "h1",
          { className: "hero-title" },
          "Learn With Your Voice"
        ),
        React.createElement(
          "p",
          { className: "hero-subtitle" },
          "Navigate and control your learning experience using voice commands. Our cutting-edge platform makes education more accessible and hands-free."
        ),
        React.createElement(
          "div",
          { className: "hero-btns" },
          React.createElement(
            Link,
            { to: "/courses", className: "btn btn-primary" },
            "Browse Courses"
          ),
          React.createElement(
            Link,
            { to: "#", className: "btn btn-outline" },
            "How It Works"
          )
        )
      )
    )
  );
}

export default Hero;