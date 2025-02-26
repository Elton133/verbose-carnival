import { useParams } from "react-router-dom";

const projectData = [
  {
    id: "employee-management",
    title: "Employee Management Dashboard",
    description: "Allows HR Managers to manage employees and their details.",
    date: "2025-01",
    url: "https://elton-dashboard.netlify.app",
  },
  {
    id: "ai-ally",
    title: "Ai Ally",
    description: "A landing page for an AI chatbot.",
    date: "2024-10",
    url: "https://ai-ally.netlify.app",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-center mt-10">Project Not Found</h2>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-gray-600">{project.date}</p>
      <p className="mt-4">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 inline-block"
      >
        View Live Project
      </a>
    </div>
  );
}
