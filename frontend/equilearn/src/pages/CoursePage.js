// src/pages/CoursePage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    return React.createElement(
      "div",
      { className: "container section" },
      React.createElement("h2", null, "Course not found"),
      React.createElement(
        "button",
        { 
          className: "btn btn-primary",
          onClick: () => navigate("/courses")
        },
        "Back to Courses"
      )
    );
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(
      "main",
      null,
      React.createElement(
        "section",
        { className: "course-header" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement("h1", null, course.title),
          React.createElement("p", null, course.description)
        )
      ),
      React.createElement(
        "section",
        { className: "section" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "course-content" },
            React.createElement(
              "div",
              { className: "course-main" },
              React.createElement("h2", null, "About This Course"),
              React.createElement(
                "p",
                null,
                "This comprehensive course is designed to provide you with a deep understanding of the subject matter. Through a combination of video lectures, practical exercises, and supplementary materials, you'll develop both theoretical knowledge and practical skills."
              ),
              React.createElement("h3", null, "What You'll Learn"),
              React.createElement(
                "ul",
                null,
                React.createElement("li", null, "Core concepts and fundamental principles"),
                React.createElement("li", null, "Practical application of theoretical knowledge"),
                React.createElement("li", null, "Industry best practices and standards"),
                React.createElement("li", null, "Problem-solving techniques and approaches")
              ),
              React.createElement("h3", null, "Course Structure"),
              React.createElement(
                "p",
                null,
                "The course is structured into modules, each focusing on specific aspects of the subject. You'll have access to video lectures, reading materials, assignments, and assessments to reinforce your learning."
              )
            ),
            React.createElement(
              "div",
              { className: "sidebar" },
              React.createElement("h3", { className: "sidebar-title" }, "Course Resources"),
              React.createElement(
                "ul",
                { className: "sidebar-menu" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: `/courses/${courseId}/materials` },
                    "Course Materials"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: `/courses/${courseId}/videos` },
                    "Video Lectures"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Discussion Forum"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Assignments"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Quizzes"
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

export default CoursePage;