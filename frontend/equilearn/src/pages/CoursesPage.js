// src/pages/CoursesPage.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CoursesPage() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(
      "main",
      null,
      React.createElement(
        "section",
        { className: "section" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h1",
            null,
            "Available Courses"
          ),
          React.createElement(
            "p",
            { className: "mb-4" },
            "Browse our selection of courses designed to enhance your skills and knowledge."
          ),
          React.createElement(
            "div",
            { className: "course-grid" },
            coursesData.map(course => 
              React.createElement(
                "div",
                { key: course.id, className: "course-card" },
                React.createElement("img", {
                  src: `/api/placeholder/600/400?text=${encodeURIComponent(course.title)}`,
                  alt: course.title,
                  className: "course-card-img"
                }),
                React.createElement(
                  "div",
                  { className: "course-card-content" },
                  React.createElement(
                    "h3",
                    { className: "course-card-title" },
                    course.title
                  ),
                  React.createElement(
                    "p",
                    { className: "course-card-description" },
                    course.description
                  ),
                  React.createElement(
                    Link,
                    { 
                      to: `/courses/${course.id}`,
                      className: "btn btn-primary"
                    },
                    "View Course"
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(Footer),
    React.createElement(VoiceCommandButton)
  );
}

export default CoursesPage;