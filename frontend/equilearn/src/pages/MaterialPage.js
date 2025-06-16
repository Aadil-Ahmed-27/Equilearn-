// src/pages/MaterialPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function MaterialPage() {
  const { courseId, materialId } = useParams();
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
  
  const material = course.materials.find(m => m.id === materialId);
  
  if (!material) {
    return React.createElement(
      "div",
      { className: "container section" },
      React.createElement("h2", null, "Material not found"),
      React.createElement(
        "button",
        { 
          className: "btn btn-primary",
          onClick: () => navigate(`/courses/${courseId}/materials`)
        },
        "Back to Materials"
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
          React.createElement("h1", null, material.title),
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
              React.createElement(
                "li",
                null,
                React.createElement(Link, { to: `/courses/${courseId}/materials` }, "Materials")
              ),
              React.createElement("li", null, " / "),
              React.createElement("li", null, material.title)
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
              { className: "material-content" },
              React.createElement("h2", null, material.title),
              React.createElement(
                "div",
                { className: "material-metadata" },
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    "strong",
                    null,
                    "Type: "
                  ),
                  material.type || "Document"
                ),
                material.date && React.createElement(
                  "p",
                  null,
                  React.createElement(
                    "strong",
                    null,
                    "Date: "
                  ),
                  material.date
                )
              ),
              React.createElement("hr", { style: { margin: "1.5rem 0" } }),
              React.createElement(
                "div",
                { className: "material-body" },
                React.createElement(
                  "div",
                  { dangerouslySetInnerHTML: { __html: material.content } }
                ),
                !material.content && React.createElement(
                  "p",
                  null,
                  "This material content is not available for preview."
                )
              ),
              material.downloadUrl && React.createElement(
                "div",
                { className: "material-actions", style: { marginTop: "2rem" } },
                React.createElement(
                  "a",
                  { 
                    href: material.downloadUrl,
                    className: "btn btn-primary",
                    download: true
                  },
                  "Download Material"
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
                )
              ),
              React.createElement("h3", { className: "sidebar-title", style: { marginTop: "2rem" } }, "Related Materials"),
              React.createElement(
                "ul",
                { className: "sidebar-menu" },
                course.materials
                  .filter(m => m.id !== materialId)
                  .slice(0, 3)
                  .map(m => React.createElement(
                    "li",
                    { key: m.id },
                    React.createElement(
                      Link,
                      { to: `/courses/${courseId}/materials/${m.id}` },
                      m.title
                    )
                  ))
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

export default MaterialPage;