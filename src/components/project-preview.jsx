import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import github from "../assets/github.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  const navigate = useNavigate();

  const features = [
    {
      id: "employee-management",
      title: "Employee Management Dashboard",
      description: "Allows HR Managers to manage employees and their details",
      date: "2025-01",
      url: "https://elton-dashboard.netlify.app",
      github: "https://github.com/Elton133/HR-Dashboard.git",
    },
    {
      id: "tourghana",
      title: "TourGhana website",
      description:
        "An educative and informative website for tourists, students in Ghana",
      date: "2024-10",
      url: "https://tourghana.vercel.app",
      github: "https://github.com/Elton133/Tour-Ghana.git",
    },

    {
      id: "weather",
      title: "Weather app",
      description: "A weather app that shows the current weather conditions",
      date: "2024-10",
      url: "https://elton-weather.netlify.app",
      github: "https://github.com/Elton133/Weather-app.git",
    },
  ];

  return (
    <div className="p-6 mb-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h3 className="text-3xl font-bold tracking-tight">Projects</h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={item}
              onClick={() => navigate(`/projects/${feature.id}`)}
              className="relative group p-6 h-[13rem] border border-gray-300 dark:border-[#333] rounded-2xl bg-white dark:bg-[#1a1a1a] hover:shadow-xl hover:border-cyan-500 dark:hover:border-cyan-400 transition-transform transform hover:scale-102 duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-500">{feature.date}</p>
                  <div className="flex space-x-2">
                    {feature.url && (
                      <a
                        href={feature.url}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan-600 hover:underline"
                      >
                        Live ↗
                      </a>
                    )}
                    {feature.github && (
                      <a
                        href={feature.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={github} alt="GitHub" className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
