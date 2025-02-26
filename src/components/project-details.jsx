import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dashboard from "../assets/mgmt-dashboard.png";
import aially from "../assets/ai-ally.png";
import profilecard from "../assets/profile-card.png";
import devex from "../assets/devex.mp4";
import tourghana from "../assets/tourghana.png";
import fanyogo from "../assets/fanyogo.mp4";

const projectData = [
  {
    id: "employee-management",
    image: dashboard,
    title: "Employee Management Dashboard",
    description:
      "Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details. Allows HR Managers to manage employees and their details.",
    date: "2025-01",
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
    id: "ai-ally",
    image: aially,
    title: "Ai Ally",
    description: "A landing page about a concept AI ally.",
    date: "2025-01",
    stack: ["React", "CSS", "Inspiration from Dribbble"],
    features: [
      {
        title: "Employee Management Dashboard",
        description: "Allows HR Managers to manage employees and their details",
      },
      {
        title: "Employee Management Dashboard",
        description: "Allows HR Managers to manage employees and their details",
      },
    ],
    url: "https://ai-ally.netlify.app",
    isVideo: false,
  },
  {
    id: "profile-card",
    image: profilecard,
    title: "Profile Card Component",
    description:
      "Responsive profile card component with light and dark theme options. Features customizable user information, social media links, and interactive action buttons.",
    date: "2025-01",
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
    date: "2025-01",
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
    date: "2025-01",
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
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-center mt-10">Project Not Found</h2>;
  }

  return (
    <>
      <Link
        className="ml-10 p-3 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
        to="/projects"
      >
        Back
      </Link>
      <div className="p-6 max-w-3xl mx-auto mt-20">
        {project.isVideo ? (
          <video
            src={project.image}
            alt={project.title}
            className="mb-7 rounded-2xl w-full h-90 object-cover transition-transform duration-500 hover:scale-103"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="mb-7 rounded-2xl w-full h-90 object-cover transition-transform duration-500 hover:scale-103"
          />
        )}

        <h2 className="md:text-3xl text-[18px] font-extrabold">
          {project.title}
        </h2>
        <p className="text-[#4A5568]">{project.date}</p>
        <p className="mt-4 mb-10 text-[#4A5568]">{project.description}</p>
        <p className="mt-4 mb-3 text-[20px] font-bold text-[#4A5568]">
          Tech Stack
        </p>

        <ul
          className="list-disc list-inside ml-4"
          style={{ marginLeft: "1.5rem", listStyleType: "disc" }}
        >
          {project.stack?.map((tech, index) => (
            <li key={index} className="mb-2 text-blue-400 font-bold">
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-10 mb-3 text-[20px] font-bold  text-[#4A5568]">
          Features
        </p>
        <ul
          className="list-disc ml-4"
          style={{ marginLeft: "1.5rem", listStyleType: "disc" }}
        >
          {project.features.map((feature, index) => (
            <li className="mb-4 text-[#4A5568]" key={index}>
              <strong className="">{feature.title}:</strong>{" "}
              {feature.description}
            </li>
          ))}
        </ul>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm mt-4 inline-block p-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
        >
          View Live Project
        </a>
      </div>
    </>
  );
}
