// import React from "react";
// import Marquee from "react-fast-marquee";

// const TechStack = () => {
//   return (
//     <div className="flex flex-col items-center justify-center md:mt-25 mt-10 md:mx-0 mx-2">
//       <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
//       <div className="max-w-[500px] overflow-hidden">
//         <Marquee pauseOnHover={true} speed={50}>
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-6 h-6 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
//           />
//           <img
//             className="md:w-12 md:h-12 w-7 h-7 mx-4"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
//           />
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default TechStack;

import React from "react";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center md:mt-25 mt-10 md:mx-0 mx-2">
      <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>

      {/* Wrapper to prevent overflow */}
      <div className="max-w-[500px] w-full overflow-hidden mx-auto">
        {/* Frontend Technologies */}
        <div className="w-full overflow-hidden">
          <Marquee pauseOnHover={true} speed={40} direction="left">
            {[
              "react",
              "html5",
              "css3",
              "javascript",
              "tailwindcss",
              "bootstrap",
              "figma",
              "python",
            ].map((tech) => (
              <img
                key={tech}
                className="md:w-12 md:h-12 w-7 h-7 mx-4"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                alt={tech}
              />
            ))}
            {/* FlutterFlow Logo */}
            <img
              className="md:w-12 md:h-12 w-7 h-7 mx-4"
              src="https://raw.githubusercontent.com/FlutterFlow/flutterflow-documentation/77cf2cb1b0b25c25f38676d9f225ff87d21a875f/static/logos/logoMark_outlinePrimary_transparent.svg"
              alt="flutterflow"
            />
          </Marquee>
        </div>

        {/* Backend & State Management */}
        <div className="w-full overflow-hidden mt-4">
          <Marquee pauseOnHover={true} speed={30} direction="right">
            {["sql", "php", "git", "rest"].map((tech) => (
              <img
                key={tech}
                className="md:w-12 md:h-12 w-7 h-7 mx-4"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                alt={tech}
              />
            ))}
            {/* Zustand Logo */}
            <img
              className="md:w-12 md:h-12 w-7 h-7 mx-4"
              src="https://raw.githubusercontent.com/pmndrs/zustand/refs/heads/main/docs/favicon.ico"
              alt="zustand"
            />
          </Marquee>
        </div>

        {/* Tools & Platforms */}
        <div className="w-full overflow-hidden mt-4">
          <Marquee pauseOnHover={true} speed={50} direction="left">
            {["vscode", "vercel", "netlify"].map((tech) => (
              <img
                key={tech}
                className="md:w-12 md:h-12 w-7 h-7 mx-4"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                alt={tech}
              />
            ))}
            <img
              className="md:w-12 md:h-12 w-7 h-7 mx-4"
              src="https://raw.githubusercontent.com/vitejs/vite/cc2d623dca58ca3e006ecb1ffda89c16373bd20c/docs/images/vite.svg"
              alt="zustand"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
