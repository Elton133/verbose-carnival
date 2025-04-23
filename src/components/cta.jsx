import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="flex items-center justify-center md:mt-10 mt-2">
      <a
        href="/new-resume.pdf"
        download="elton_resume.pdf"
        className="resume-btn"
      >
        Download my resume
      </a>
    </div>
  );
};

export default CTA;
