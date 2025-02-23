import React from "react";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center md:mt-25 mt-10 md:mx-0 mx-2">
      <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
      <div className="flex flex-wrap items-center justify-center md:gap-5 gap-4 max-w-[500px]">
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        />
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        />
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        />
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        />
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        />
        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />

        <img
          className="w-12 h-12"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
      </div>
    </div>
  );
};

export default TechStack;
