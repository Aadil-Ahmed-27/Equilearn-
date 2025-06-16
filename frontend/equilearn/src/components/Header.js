// src/components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return React.createElement(
    "header",
    { className: "header" },
    React.createElement(
      "div",
      { className: "container header-container" },
      React.createElement(
        Link,
        { to: "/", className: "logo" },
        "Equilearn"
      ),
      React.createElement(
        "nav",
        null,
        React.createElement(
          "ul",
          { className: "nav-menu" },
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/", className: isActive("/") },
              "Home"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/courses", className: isActive("/courses") },
              "Courses"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "#", className: "nav-link" },
              "About"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "#", className: "nav-link" },
              "Contact"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "#", className: "btn btn-primary" },
              "Sign In"
            )
          )
        )
      )
    )
  );
}

export default Header;