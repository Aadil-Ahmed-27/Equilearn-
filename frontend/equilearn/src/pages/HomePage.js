// src/pages/HomePage.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import VoiceCommandButton from "../components/VoiceCommandButton";

function HomePage() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(Hero),
    React.createElement(Features),
    React.createElement(CTA),
    React.createElement(Footer),
    React.createElement(VoiceCommandButton)
  );
}

export default HomePage;