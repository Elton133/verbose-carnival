import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Banner from "./components/Banner";
import AboutMe from "./components/about-me";
import TechStack from "./components/tech-stack";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition">
      <Navbar />
      <PersonalDetails />
      <AboutMe />
      <TechStack />
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
