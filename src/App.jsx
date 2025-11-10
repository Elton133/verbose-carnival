import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";
import AboutMe from "./components/about-me";
import TechStack from "./components/tech-stack";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";
import ProjectDetails from "./components/project-details";
import Now from "./components/now";
import CTA from "./components/cta";
import ProjectsSection from "./components/project-preview";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-[#333333] dark:text-[#e0e0e0] transition-colors">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PersonalDetails />
              <AboutMe />
              <CTA />
              <TechStack />
              <Contact />
              <ProjectsSection />
            </>
          }
        />

        {/* Projects page */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/now" element={<Now />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
