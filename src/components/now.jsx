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

        <motion.div variants={container} initial="hidden" animate="show">
          <div className="flex items-center gap-2 md:text-xl text-[18px] font-bold">
            <p>So, what am I doing now?</p>
            👀
          </div>

          <p className="text-[14px] md:text-base">
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
          <p className="text-[14px] md:text-base">
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
          <p className="text-[14px] md:text-base">
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
          <p className="text-[14px] md:text-base">
            In February, through Partechnologies and Consult, I had the
            opportunity to work on a real-world project—developing a website for
            an organization focused on global deal sourcing. This project was
            both fun and challenging, giving me what felt like a year’s worth of
            experience in just a month.
          </p>
          <br />
          <p className="text-[14px] md:text-base">
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

// "use client";

// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   ExternalLink,
//   Briefcase,
//   Code,
//   Users,
//   Lightbulb,
// } from "lucide-react";

// const Now = () => {
//   // Refs for scroll animations
//   const containerRef = useRef(null);
//   const timelineRef = useRef(null);
//   const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.2 });

//   // Scroll progress animation
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   const fadeInVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//       },
//     },
//   };

//   const timelineItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Experience data
//   const experiences = [
//     {
//       date: "December 2024",
//       title: "Started Frontend Engineer Internship",
//       description:
//         "Joined Partechnologies and Consult as a Frontend Engineer intern after vacation.",
//       icon: <Briefcase className="h-5 w-5" />,
//       link: null,
//     },
//     {
//       date: "January 2025",
//       title: "Employee Management Dashboard",
//       description:
//         "Crafted an employee management dashboard to help HR managers efficiently manage employee-related tasks.",
//       icon: <Users className="h-5 w-5" />,
//       link: {
//         text: "View Project",
//         url: "/projects/employee-management",
//       },
//     },
//     {
//       date: "January 2025",
//       title: "TeamVault Implementation",
//       description:
//         "Implemented the first version of the dashboard with continuous improvements to enhance user experience.",
//       icon: <Code className="h-5 w-5" />,
//       link: {
//         text: "See Implementation",
//         url: "/projects/teamvault",
//       },
//     },
//     {
//       date: "February 2025",
//       title: "Global Deal Sourcing Website",
//       description:
//         "Worked on a real-world project developing a website for an organization focused on global deal sourcing.",
//       icon: <Lightbulb className="h-5 w-5" />,
//       link: null,
//     },
//   ];

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen  pt-16 pb-24"
//     >
//       {/* Scroll progress indicator */}
//       <motion.div
//         className="fixed left-0 top-0 bottom-0 w-1 bg-blue-500 origin-top z-50"
//         style={{ height: progressHeight }}
//       />

//       <div className="max-w-4xl mx-auto px-6 relative">
//         {/* Header section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mb-16 relative"
//         >
//           <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
//           <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

//           <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight">
//             Now
//           </h1>

//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "100px" }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-4 mb-8 rounded-full"
//           />

//           <motion.div
//             variants={fadeInVariants}
//             initial="hidden"
//             animate="visible"
//             className="flex items-center gap-3 text-xl md:text-2xl font-bold mt-8 text-slate-800 dark:text-slate-200"
//           >
//             <p>So, what am I doing now?</p>
//             <motion.span
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 5, 0, -5, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatDelay: 3,
//               }}
//             >
//               👀
//             </motion.span>
//           </motion.div>
//         </motion.div>

//         {/* Timeline section */}
//         <div className="relative" ref={timelineRef}>
//           <motion.div
//             className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
//             initial={{ height: 0 }}
//             animate={isTimelineInView ? { height: "100%" } : { height: 0 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           />

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isTimelineInView ? "visible" : "hidden"}
//             className="space-y-12 relative"
//           >
//             {experiences.map((experience, index) => (
//               <motion.div
//                 key={index}
//                 variants={timelineItemVariants}
//                 custom={index}
//                 className="relative pl-14"
//               >
//                 {/* Timeline dot */}
//                 <motion.div
//                   className="absolute left-0 top-0 w-[14px] h-[14px] rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-400 z-10"
//                   initial={{ scale: 0 }}
//                   animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                 />

//                 {/* Icon circle */}
//                 <div className="absolute left-[22px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white shadow-md">
//                   {experience.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
//                   <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
//                     <Calendar className="h-4 w-4" />
//                     <span>{experience.date}</span>
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
//                     {experience.title}
//                   </h3>

//                   <p className="text-slate-600 dark:text-slate-300 mb-4">
//                     {experience.description}
//                   </p>

//                   {experience.link && (
//                     <Link
//                       href={experience.link.url}
//                       className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
//                     >
//                       {experience.link.text}
//                       <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//                     </Link>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Skills section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="mt-20"
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6"
//           >
//             Skills & Technologies
//           </motion.h2>

//           <motion.div
//             variants={itemVariants}
//             className="grid grid-cols-2 md:grid-cols-3 gap-3"
//           >
//             {[
//               "React.js",
//               "JavaScript",
//               "Vite",
//               "CSS",
//               "Figma",
//               "Agile/Scrum",
//               "UI/UX Design",
//               "Zustand",
//               "useSWR",
//             ].map((skill, index) => (
//               <motion.div
//                 key={skill}
//                 className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700 text-center"
//                 whileHover={{
//                   y: -5,
//                   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <span className="font-medium text-slate-700 dark:text-slate-300">
//                   {skill}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Conclusion */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-8 border border-blue-100 dark:border-blue-900"
//         >
//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
//           >
//             Daily Scrum meetings and applying Agile methodologies in a
//             real-world setting were incredibly insightful. One particular
//             three-hour meeting was so educational that it completely changed my
//             approach to writing and structuring code. I also got the chance to
//             learn Zustand for global state management and useSWR for data
//             fetching.
//           </motion.p>

//           <motion.div variants={itemVariants} className="mt-6 flex justify-end">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
//             >
//               <span>View All Projects</span>
//               <ExternalLink className="h-4 w-4" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Now;

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowUp01 } from "lucide-react";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// const Now = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, type: "spring" }}
//           className="mb-12"
//         >
//           <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Current Focus
//           </h3>
//           <div className="mt-4 h-1 w-24 bg-blue-500 rounded-full" />
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="space-y-8"
//         >
//           <motion.div
//             variants={item}
//             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-blue-100 rounded-lg">
//                 <span className="text-2xl">👨💻</span>
//               </div>
//               <h4 className="text-xl font-semibold text-slate-800">
//                 Frontend Engineering Internship
//               </h4>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Since December 2023 at Partechnologies and Consult, I've been
//               crafting an employee management dashboard for HR efficiency. Check
//               my progress:
//             </p>
//             <Link
//               to="/projects/employee-management"
//               className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
//             >
//               View Dashboard Project
//               <ArrowUp01 className="inline-block" />
//             </Link>
//           </motion.div>

//           <motion.div
//             variants={item}
//             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-purple-100 rounded-lg">
//                 <span className="text-2xl">🚀</span>
//               </div>
//               <h4 className="text-xl font-semibold text-slate-800">
//                 Real-World Project Development
//               </h4>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               In February, I led development for a global deal sourcing
//               platform:
//             </p>
//             <Link
//               to="/projects/teamvault"
//               className="mt-4 inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
//             >
//               Explore TeamVault
//               <ArrowUp01 className="inline-block" />
//             </Link>
//           </motion.div>

//           <motion.div
//             variants={item}
//             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-green-100 rounded-lg">
//                 <span className="text-2xl">📚</span>
//               </div>
//               <h4 className="text-xl font-semibold text-slate-800">
//                 Continuous Learning
//               </h4>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Mastering modern tools through daily Agile practice:
//               <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                 Zustand
//               </span>
//               <span className="inline-block mx-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                 useSWR
//               </span>
//               <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                 React 18
//               </span>
//             </p>
//           </motion.div>

//           <motion.div
//             variants={item}
//             className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-2 bg-orange-100 rounded-lg">
//                 <span className="text-2xl">💡</span>
//               </div>
//               <h4 className="text-xl font-semibold text-slate-800">
//                 Professional Growth
//               </h4>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Gained invaluable experience in:
//               <ul className="list-disc pl-6 mt-3 space-y-2">
//                 <li>Agile methodology implementation</li>
//                 <li>SDLC best practices</li>
//                 <li>UI/UX optimization techniques</li>
//                 <li>Technical documentation</li>
//               </ul>
//             </p>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mt-12 text-center text-slate-500 text-sm"
//         >
//           Last updated: {new Date().toLocaleDateString()}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Now;
