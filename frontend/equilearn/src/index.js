// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  React.createElement(BrowserRouter, null,
    React.createElement(App, null)
  )
);
