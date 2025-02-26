import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Now = () => {
  return (
    <div className="p-6 mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <h3 className="scroll-m-20  text-3xl font-bold tracking-tight first:mt-0">
            Now
          </h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-[#4A5568]"
        >
          <div className="flex items-center gap-2 text-xl font-bold">
            <p>So, what am I doing now?</p>
            👀
          </div>

          <p>
            I’m currently a Frontend Engineer intern at Partechnologies and
            Consult. I started on December 27, 2024, after my vacation. In my
            first week, I worked on crafting an employee management dashboard
            designed to help Human Resource Managers efficiently manage
            employee-related tasks. If you haven’t seen my employee management
            dashboard yet, check it out:{" "}
            <Link
              to="/projects/employee-management"
              className="text-blue-400 font-bold gap-2"
            >
              Look here 👀
            </Link>
          </p>
          <br />
          <p>
            The first implementation of this dashboard is available
            <Link
              to="/projects/teamvault"
              className="text-blue-400 font-bold  gap-2 ml-1"
            >
              here 👀
            </Link>
            . I had to make several changes along the way as I continued
            improving the User Experience.
          </p>
          <br />
          <p>
            Throughout this internship, I leveraged multiple skills, including
            React.js, React Hooks, JavaScript, Vite, CSS, and Figma, to develop
            and refine the dashboard. Working in an Agile environment, I applied
            Scrum methodologies, participated in daily stand-ups, and
            contributed to discussions about Software Development Life Cycle
            (SDLC) and Software Documentation. This experience also strengthened
            my User Interface Design (UI), User Experience Design (UX), and
            Front-End Development skills.
          </p>
          <br />
          <p>
            In February, through Partechnologies and Consult, I had the
            opportunity to work on a real-world project—developing a website for
            an organization focused on global deal sourcing. This project was
            both fun and challenging, giving me what felt like a year’s worth of
            experience in just a month.
          </p>
          <br />
          <p>
            Daily Scrum meetings and applying Agile methodologies in a
            real-world setting were incredibly insightful. One particular
            three-hour meeting was so educational that it completely changed my
            approach to writing and structuring code. I also got the chance to
            learn Zustand for global state management and useSWR for data
            fetching.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Now;
