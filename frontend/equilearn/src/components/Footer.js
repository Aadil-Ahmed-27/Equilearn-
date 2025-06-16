// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "footer-grid" },
        React.createElement(
          "div",
          { className: "footer-column" },
          React.createElement("h3", null, "Equilearn"),
          React.createElement(
            "p",
            null,
            "Learn with the power of your voice. Our platform offers a hands-free learning experience with voice command capabilities."
          )
        ),
        React.createElement(
          "div",
          { className: "footer-column" },
          React.createElement("h3", null, "Quick Links"),
          React.createElement(
            "ul",
            { className: "footer-menu" },
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "/" }, "Home")
            ),
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "/courses" }, "Courses")
            ),
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "#" }, "About Us")
            ),
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "#" }, "Contact")
            )
          )
        ),
        React.createElement(
          "div",
          { className: "footer-column" },
          React.createElement("h3", null, "Course Categories"),
          React.createElement(
            "ul",
            { className: "footer-menu" },
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "#" }, "Artificial Intelligence")
            ),
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "#" }, "Web Development")
            ),
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "#" }, "Data Science")
            ),
            React.createElement(
              "li",
              null,
              React.createElement(Link, { to: "#" }, "Business")
            )
          )
        ),
        React.createElement(
          "div",
          { className: "footer-column" },
          React.createElement("h3", null, "Contact Us"),
          React.createElement(
            "ul",
            { className: "footer-menu" },
            React.createElement(
              "li",
              null,
              "Email: info@equilearn.com"
            ),
            React.createElement(
              "li",
              null,
              "Phone: (123) 456-7890"
            ),
            React.createElement(
              "li",
              null,
              "Address: 123 Learn St, Education City"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "copyright" },
        "© ",
        new Date().getFullYear(),
        " Equilearn. All rights reserved."
      )
    )
  );
}

export default Footer;