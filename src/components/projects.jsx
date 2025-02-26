import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin-dashboard/user-deal");
  };

  const handleNavigate2 = () => {
    navigate("/dashboard/profile");
  };
  const features = [
    {
      id: "employee-management",
      title: "Employee Management Dashboard",
      description: "Allows HR Managers to manage employees and their details",
      date: "2025-01",
      url: "https://elton-dashboard.netlify.app",
    },
    {
      id: "ai-ally",
      title: "Ai Ally",
      description: "A landing page for an AI chatbot",
      date: "2024-10",
      url: "https://ai-ally.netlify.app",
    },
    {
      id: "profile-card",
      title: "Profile Card",
      description: "A sleek and minimalistic profile card component",
      date: "2024-10",
    },
    {
      id: "developer-experience",
      title: "The Developer Experience",
      description:
        "A landing page for an upcoming website that focuses on developer experience",
      date: "2024-10",
      //   url: "https://ai-ally.netlify.app",
    },
    {
      id: "tourghana",
      title: "TourGhana website",
      description:
        "An educative and informative website for tourists, students in Ghana",
      date: "2024-10",
      url: "https://ai-ally.netlify.app",
    },
    {
      id: "fanyogo",
      title: "Fanyogo website",
      description:
        "An informative website about Ghana's favorite afternoon delight",
      date: "2024-10",
      url: "https://fanyogo1.netlify.app",
    },
  ];

  return (
    <div>
      <div className="p-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <h3 className="scroll-m-20  text-3xl font-bold tracking-tight first:mt-0">
              My Projects
            </h3>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                onClick={() => navigate(`/projects/${feature.id}`)}
                variants={item}
                className="relative p-6 h-[12rem] hover:shadow-lg border-[1.5px] border-[#55555565] dark:hover:bg-[#131313] rounded-2xl transition-transform duration-500 ease-in-out cursor-pointer transform hover:scale-103 origin-center"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="relative">
                    <p className="text-sm text-gray-700">{feature.date}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
