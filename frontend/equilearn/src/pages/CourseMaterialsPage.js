// src/pages/CourseMaterialsPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CourseMaterialsPage() {
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
          React.createElement("h1", null, `${course.title} - Materials`),
          React.createElement(
            "nav",
            { "aria-label": "breadcrumb" },
            React.createElement(
              "ol",
              { style: { display: "flex", listStyle: "none", gap: "0.5rem" } },
              React.createElement(
                "li",
                null,
                React.createElement(Link, { to: "/courses" }, "Courses")
              ),
              React.createElement("li", null, " / "),
              React.createElement(
                "li",
                null,
                React.createElement(Link, { to: `/courses/${courseId}` }, course.title)
              ),
              React.createElement("li", null, " / "),
              React.createElement("li", null, "Materials")
            )
          )
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
              React.createElement("h2", null, "Course Materials"),
              React.createElement(
                "p",
                null,
                "Access all lecture notes, assignments, and additional resources for this course."
              ),
              React.createElement(
                "div",
                { className: "material-list" },
                course.materials.map(material => 
                  React.createElement(
                    "div",
                    { key: material.id, className: "material-card" },
                    React.createElement(
                      "div",
                      { className: "material-card-content" },
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
                          style: { marginRight: "10px" }
                        },
                        React.createElement("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                        React.createElement("polyline", { points: "14 2 14 8 20 8" }),
                        React.createElement("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                        React.createElement("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                        React.createElement("polyline", { points: "10 9 9 9 8 9" })
                      ),
                      React.createElement(
                        "h3",
                        null,
                        material.title
                      ),
                      React.createElement(
                        Link,
                        { 
                          to: `/courses/${courseId}/materials/${material.id}`,
                          className: "btn btn-primary"
                        },
                        "View Material"
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "sidebar" },
              React.createElement("h3", { className: "sidebar-title" }, "Course Navigation"),
              React.createElement(
                "ul",
                { className: "sidebar-menu" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: `/courses/${courseId}` },
                    "Course Overview"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { 
                      to: `/courses/${courseId}/materials`,
                      className: "active"
                    },
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

export default CourseMaterialsPage;