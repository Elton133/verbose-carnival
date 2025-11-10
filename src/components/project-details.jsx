import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dashboard from "../assets/mgmt-dashboard.png";
import aially from "../assets/ai-ally.png";
import profilecard from "../assets/profile-card.png";
import devex from "../assets/devex.mp4";
import tourghana from "../assets/tourghana.png";
import fanyogo from "../assets/fanyogo.mp4";
import weather from "../assets/weather.mp4";
import pricingpanel from "../assets/pricingpanel.png";

const projectData = [
  {
    id: "employee-management",
    image: dashboard,
    title: "Employee Management Dashboard",
    description:
      "Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details.",
    date: "2025-01-23",
    stack: [
      "React",
      "CSS",
      "Local Storage for Data Persistence",
      "App.haikei for SVG Backgrounds",
      "React Icons for Icons",
      "React Router for Navigation",
      "React hot toast for Notifications",
    ],
    features: [
      {
        title: "Add Employees",
        description: "Add new employees to the database",
      },
      {
        title: "View Employees",
        description: "View employees makes use of the profile card component",
      },
      {
        title: "Edit Employees",
        description: "Local Storage fills in saved data for editing",
      },
      {
        title: "Delete Employees",
        description: "Remove employees from the database",
      },
      {
        title: "Toasts",
        description: "Notifications for user actions",
      },
    ],
    url: "https://elton-dashboard.netlify.app",
    isVideo: false,
  },
  {
    id: "teamvault",
    image: dashboard,
    title: "Employee Management Site",
    description:
      "Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details.",
    date: "2025-01-23",
    stack: [
      "React",
      "CSS",
      "Local Storage for Data Persistence",
      "App.haikei for SVG Backgrounds",
      "React Icons for Icons",
      "React Router for Navigation",
      "React hot toast for Notifications",
    ],
    features: [
      {
        title: "Add Employees",
        description: "Add new employees to the database",
      },
      {
        title: "View Employees",
        description: "View employees makes use of the profile card component",
      },
      {
        title: "Edit Employees",
        description: "Local Storage fills in saved data for editing",
      },
      {
        title: "Delete Employees",
        description: "Remove employees from the database",
      },
      {
        title: "Toasts",
        description: "Notifications for user actions",
      },
    ],
    url: "https://teamvault.netlify.app",
    isVideo: false,
  },
  {
    id: "ai-ally",
    image: aially,
    title: "Ai Ally",
    description:
      "AI Ally is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains",
    date: "2024-12-05",
    stack: ["React", "CSS", "Inspiration from Dribbble"],
    features: [],
    url: "https://ai-ally.netlify.app",
    isVideo: false,
  },
  {
    id: "profile-card",
    image: profilecard,
    title: "Profile Card Component",
    description:
      "Responsive profile card component with light and dark theme options. Features customizable user information, social media links, and interactive action buttons.",
    date: "2024-11-15",
    stack: ["React", "CSS"],
    features: [
      {
        title: "Light & Dark Theme Toggle",
        description:
          "Seamlessly switch between light and dark modes with smooth transition animations",
      },
      {
        title: "Social Media Integration",
        description:
          "Connect multiple platforms with customizable icons and interactive hover effects",
      },
    ],

    isVideo: false,
  },
  {
    id: "developer-experience",
    image: devex,
    title: "The Developer Experience",
    description:
      "A cutting-edge platform designed to revolutionize the developer experience through immersive visuals and intelligent accountability tools. Our environment helps programmers maintain consistency, track progress, and rediscover the joy of coding through a seamless, engaging interface that adapts to your workflow.",
    date: "2025-01",
    stack: ["React", "Tailwind CSS"],
    features: [
      {
        title: "Immersive Developer Environment",
        description:
          "Captivating particle-based UI that creates a seamless and engaging experience for programmers",
      },
      {
        title: "Accountability Platform",
        description:
          "Innovative tools to help developers maintain consistency and track progress in their programming journey",
      },
    ],
    isVideo: true,
  },
  {
    id: "tourghana",
    image: tourghana,
    title: "TourGhana",
    description:
      "An educative and informative website for tourists and students in Ghana. This website dives into the various regions in Ghana, highlighting the culture, history, and tourist attractions. You're in for an exciting journey!",
    date: "2024-05-24",
    stack: ["React", "CSS"],
    features: [
      {
        title: "An informative landing page for a quick overview of Ghana",
        description:
          "This highlights the culture, history, and tourist attractions in Ghana",
      },
      {
        title: "About Page",
        description:
          "Our about page uses the striking colors of our flag to give the user a sense of patriotism and pride, and to communicate our mission and vision",
      },
      {
        title: "Contact Page",
        description:
          "This page allows users to reach out to us for any inquiries or feedback",
      },
      {
        title: "Regions",
        description:
          "We delve into the various regions in Ghana, highlighting the culture, history, and tourist attractions",
      },
    ],
    url: "https://tourghana1.netlify.app",
    isVideo: false,
  },
  {
    id: "fanyogo",
    image: fanyogo,
    title: "Fanyogo",
    description:
      "An informative website about Ghana's favorite afternoon delight",
    date: "2024-09-24",
    stack: ["React", "CSS"],
    features: [
      {
        title: "Images of Ghana's favorite afternoon delight",
        description: "Show cases the various flavors of fanyogo",
      },
    ],
    url: "https://fanyogo1.netlify.app",
    isVideo: true,
  },
  {
    id: "pricingpanel",
    image: pricingpanel,
    title: "Pricing Panel",
    description:
      "Pricing Panel is a responsive web application that presents a structured and user-friendly pricing table for different subscription plans. Designed with clean UI and modern styling, the panel effectively displays plan features, pricing details, and call-to-action buttons for easy selection. This project showcases my ability to create intuitive and visually appealing interfaces while ensuring responsiveness and accessibility across devices.",
    date: "2024-09-24",
    stack: ["HTML", "CSS"],
    features: [],
    url: "https://pricingpanel1.netlify.app",
    isVideo: false,
  },
  {
    id: "weather",
    image: weather,
    title: "Weather App",
    description:
      "A weather forecasting app that provides real-time weather updates for any location. The app integrates with a REST API to fetch and display temperature, weather conditions, and more. Developed using React, Vite, and modern API integration techniques, ensuring fast performance and a seamless user experience. Optimized as a Progressive Web App (PWA), allowing users to install it on their devices for offline access and a native-like experience.",
    date: "2024-09-24",
    stack: ["HTML", "CSS"],
    features: [],
    url: "https://elton-weather.netlify.app",
    isVideo: true,
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-center mt-10 dark:text-white">Project Not Found</h2>;
  }

  return (
    <>
      <Link
        className="ml-10 p-3 rounded-full text-white bg-blue-500 hover:bg-blue-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 transition duration-300"
        to="/projects"
      >
        Back
      </Link>
      <div className="p-6 max-w-6xl mx-auto mt-10 font-[Euclid-Circular-B]">
        {/* Hero Section with Image/Video */}
        <div className="relative overflow-hidden rounded-2xl mb-10 group">
          {project.isVideo ? (
            <video
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-300">{project.date}</p>
          </div>
        </div>

        {/* Description Card */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 mb-6 shadow-lg border border-gray-200 dark:border-[#333]">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About This Project</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 mb-6 shadow-lg border border-gray-200 dark:border-[#333]">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.stack?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800"
              >
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Cards */}
        {project.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-[#333] hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View Live Project →
          </a>
        </div>
      </div>
    </>
  );
}
