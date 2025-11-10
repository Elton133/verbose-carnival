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
import Now from "./components/now";
import CTA from "./components/cta";
import StaggeredMenu from "./components/StaggeredMenu";
import ThemeToggle from "./components/theme-toggle";

const App = () => {

   const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];
  return (
    <div className="bg-white dark:bg-black text-[#333333] dark:text-[#e0e0e0] transition-colors">
     

<div style={{background: '#1a1a1a'}}>
  <StaggeredMenu
  isFixed={true}
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#000000', '#000000']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#ff6b6b"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <ThemeToggle  />
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
