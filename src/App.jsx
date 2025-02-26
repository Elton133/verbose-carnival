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
import Projects from "./components/projects";
import ProjectDetails from "./components/project-details";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition">
      <Navbar />
      <Routes>
        {/* Home page will show the following components */}
        <Route
          path="/"
          element={
            <>
              <PersonalDetails />
              <AboutMe />
              <TechStack />
              <Contact />
              <ProjectsSection />
            </>
          }
        />

        {/* Projects page */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
