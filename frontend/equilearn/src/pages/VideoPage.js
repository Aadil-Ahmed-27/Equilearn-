// src/pages/VideoPage.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VoiceCommandButton from "../components/VoiceCommandButton";
import coursesData from "../data/coursesData";

function VideoPage() {
  const { courseId, videoId } = useParams();
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
  
  const video = course.videos?.find(v => v.id === videoId);
  
  if (!video) {
    return React.createElement(
      "div",
      { className: "container section" },
      React.createElement("h2", null, "Video not found"),
      React.createElement(
        "button",
        { 
          className: "btn btn-primary",
          onClick: () => navigate(`/courses/${courseId}/videos`)
        },
        "Back to Videos"
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
          React.createElement("h1", null, video.title),
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
                React.createElement(Link, { to: `/courses/${courseId}/videos` }, "Videos")
              ),
              React.createElement("li", null, " / "),
              React.createElement("li", null, video.title)
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
              React.createElement(
                "div",
                { className: "video-container" },
                React.createElement(
                  "video",
                  { 
                    src: "./assets/lecture.mp4", 
                    title: video.title,
                    controls: true,
                    autoPlay: false,
                    controlsList: "nodownload",
                    className: "course-video-player",
                  }
                )
              ),
              React.createElement(
                "div",
                { className: "video-info", style: { marginTop: "1.5rem" } },
                React.createElement("h2", null, video.title),
                React.createElement(
                  "div",
                  { className: "video-meta", style: { display: "flex", gap: "1rem", color: "var(--gray)", margin: "0.5rem 0 1.5rem" } },
                  video.instructor && React.createElement(
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
                      React.createElement("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                      React.createElement("circle", { cx: "12", cy: "7", r: "4" })
                    ),
                    video.instructor
                  ),
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
                  ),
                  video.date && React.createElement(
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
                      React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                      React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                      React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                      React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                    ),
                    video.date
                  )
                ),
                React.createElement(
                  "div",
                  { className: "video-description" },
                  React.createElement("h3", null, "Description"),
                  React.createElement(
                    "p",
                    null,
                    video.description || "No description available."
                  )
                ),
                video.transcript && React.createElement(
                  "div",
                  { className: "video-transcript", style: { marginTop: "2rem" } },
                  React.createElement("h3", null, "Transcript"),
                  React.createElement(
                    "div",
                    { 
                      className: "transcript-content",
                      style: { 
                        maxHeight: "300px", 
                        overflowY: "auto", 
                        padding: "1rem", 
                        backgroundColor: "#f9fafb", 
                        borderRadius: "0.375rem",
                        border: "1px solid var(--gray-light)" 
                      }
                    },
                    video.transcript
                  )
                ),
                video.attachments && video.attachments.length > 0 && React.createElement(
                  "div",
                  { className: "video-attachments", style: { marginTop: "2rem" } },
                  React.createElement("h3", null, "Attachments"),
                  React.createElement(
                    "ul",
                    { style: { listStyle: "none", margin: "1rem 0" } },
                    video.attachments.map((attachment, index) => 
                      React.createElement(
                        "li",
                        { key: index, style: { marginBottom: "0.5rem" } },
                        React.createElement(
                          "a",
                          { 
                            href: attachment.url,
                            className: "attachment-link",
                            download: true,
                            style: { display: "flex", alignItems: "center" }
                          },
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
                              style: { marginRight: "0.5rem" }
                            },
                            React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                            React.createElement("polyline", { points: "7 10 12 15 17 10" }),
                            React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                          ),
                          attachment.name
                        )
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
              React.createElement("h3", { className: "sidebar-title", style: { marginTop: "2rem" } }, "More Videos"),
              React.createElement(
                "ul",
                { className: "sidebar-menu" },
                course.videos
                  ?.filter(v => v.id !== videoId)
                  .slice(0, 5)
                  .map(v => React.createElement(
                    "li",
                    { key: v.id },
                    React.createElement(
                      Link,
                      { to: `/courses/${courseId}/videos/${v.id}` },
                      v.title
                    )
                  ))
              ),
              React.createElement(
                "div",
                { style: { marginTop: "2rem" } },
                React.createElement(
                  Link,
                  { 
                    to: `/courses/${courseId}/videos`,
                    className: "btn btn-outline",
                    style: { width: "100%", textAlign: "center" }
                  },
                  "All Videos"
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

export default VideoPage;