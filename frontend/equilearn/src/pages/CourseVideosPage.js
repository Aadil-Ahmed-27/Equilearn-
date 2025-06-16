// src/pages/CourseVideosPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function CourseVideosPage() {
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
          React.createElement("h1", null, `${course.title} - Video Lectures`),
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
              React.createElement("li", null, "Video Lectures")
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
              React.createElement("h2", null, "Video Lectures"),
              React.createElement(
                "p",
                null,
                "Watch instructional videos to deepen your understanding of the course material."
              ),
              React.createElement(
                "div",
                { className: "video-lectures-list", style: { marginTop: "2rem", display: "grid", gap: "2rem" } },
                course.videos && course.videos.length > 0 ? (
                  course.videos.map(video => 
                    React.createElement(
                      "div",
                      { key: video.id, className: "video-card", style: { display: "flex", gap: "1.5rem", padding: "1.5rem", backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "var(--shadow)" } },
                      React.createElement(
                        "div",
                        { className: "video-thumbnail", style: { flexShrink: 0, width: "200px", height: "113px", backgroundColor: "#e5e7eb", borderRadius: "0.25rem", position: "relative", overflow: "hidden" } },
                        React.createElement("img", {
                          src: video.thumbnail || `/api/placeholder/200/113?text=${encodeURIComponent("Video: " + video.title)}`,
                          alt: video.title,
                          style: { width: "100%", height: "100%", objectFit: "cover" }
                        }),
                        React.createElement(
                          "div",
                          { 
                            className: "play-icon", 
                            style: { 
                              position: "absolute", 
                              top: "50%", 
                              left: "50%", 
                              transform: "translate(-50%, -50%)",
                              backgroundColor: "rgba(0,0,0,0.7)",
                              borderRadius: "50%",
                              width: "48px",
                              height: "48px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            } 
                          },
                          React.createElement(
                            "svg",
                            {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "white",
                              stroke: "white",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            },
                            React.createElement("polygon", { points: "5 3 19 12 5 21 5 3" })
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "video-content" },
                        React.createElement(
                          "h3",
                          { style: { marginBottom: "0.5rem" } },
                          video.title
                        ),
                        React.createElement(
                          "p",
                          { style: { color: "var(--gray)", marginBottom: "1rem" } },
                          video.description || "Watch this lecture to learn more about this topic."
                        ),
                        React.createElement(
                          "div",
                          { className: "video-meta", style: { display: "flex", gap: "1rem", fontSize: "0.875rem", color: "var(--gray)" } },
                          video.duration && React.createElement(
                            "span",
                            null,
                            React.createElement(
                              "svg",
                              {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: { display: "inline-block", verticalAlign: "middle", marginRight: "4px" }
                              },
                              React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                              React.createElement("polyline", { points: "12 6 12 12 16 14" })
                            ),
                            video.duration
                          )
                        ),
                        React.createElement(
                          "div",
                          { style: { marginTop: "1rem" } },
                          React.createElement(
                            Link,
                            { 
                              to: `/courses/${courseId}/videos/${video.id}`,
                              className: "btn btn-primary"
                            },
                            "Watch Video"
                          )
                        )
                      )
                    )
                  )
                ) : (
                  React.createElement(
                    "div",
                    { style: { textAlign: "center", padding: "3rem", backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "var(--shadow)" } },
                    React.createElement(
                      "svg",
                      {
                        width: "48",
                        height: "48",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "var(--gray)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { margin: "0 auto 1rem" }
                      },
                      React.createElement("polygon", { points: "23 7 16 12 23 17 23 7" }),
                      React.createElement("rect", { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" })
                    ),
                    React.createElement("h3", null, "No Videos Available"),
                    React.createElement(
                      "p",
                      { style: { color: "var(--gray)" } },
                      "Video lectures for this course will be uploaded soon."
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
                    { to: `/courses/${courseId}/materials` },
                    "Course Materials"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { 
                      to: `/courses/${courseId}/videos`,
                      className: "active"
                    },
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

export default CourseVideosPage;