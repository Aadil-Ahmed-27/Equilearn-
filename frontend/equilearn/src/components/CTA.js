// src/components/CTA.js
import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return React.createElement(
    "section",
    { className: "cta" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        { className: "cta-title" },
        "Ready to Start Learning with Voice Control?"
      ),
      React.createElement(
        "p",
        { className: "cta-subtitle" },
        "Join thousands of students who are enhancing their learning experience with our voice-enabled platform."
      ),
      React.createElement(
        Link,
        { to: "/courses", className: "btn btn-accent" },
        "Explore Courses"
      )
    )
  );
}

export default CTA;