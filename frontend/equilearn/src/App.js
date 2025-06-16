// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import CourseMaterialsPage from "./pages/CourseMaterialsPage";
import MaterialPage from "./pages/MaterialPage";
import CourseVideosPage from "./pages/CourseVideosPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Routes, null,
      React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
      React.createElement(Route, { path: "/courses", element: React.createElement(CoursesPage) }),
      React.createElement(Route, { path: "/courses/:courseId", element: React.createElement(CoursePage) }),
      React.createElement(Route, { path: "/courses/:courseId/materials", element: React.createElement(CourseMaterialsPage) }),
      React.createElement(Route, { path: "/courses/:courseId/materials/:materialId", element: React.createElement(MaterialPage) }),
      React.createElement(Route, { path: "/courses/:courseId/videos", element: React.createElement(CourseVideosPage) }),
      React.createElement(Route, { path: "/courses/:courseId/videos/:videoId", element: React.createElement(VideoPage) })
    )
  );
}

export default App;
