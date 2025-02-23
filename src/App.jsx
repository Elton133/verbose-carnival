import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";
import Home from "./pages/Home";
import ProjectsSection from "./components/project-preview";
import Banner from "./components/Banner";
import AboutMe from "./components/about-me";
import TechStack from "./components/tech-stack";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition">
      <Navbar />
      <PersonalDetails />
      <AboutMe />
      <TechStack />
      <Contact />
      <ProjectsSection />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
