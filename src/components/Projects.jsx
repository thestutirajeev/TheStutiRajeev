import React, { useState } from "react";
import { Github } from "lucide-react";
import backgroundimage from "../assets/bg1.png";
import ProjectSS from "./ProjectSS"; // Import the popup component
import rto1 from "../assets/screenshots/rto1.png";
import rto2 from "../assets/screenshots/rto2.png";
import rto3 from "../assets/screenshots/rto3.png";
import rto4 from "../assets/screenshots/rto4.png";
import rto5 from "../assets/screenshots/rto5.png";
import rto6 from "../assets/screenshots/rto6.png";
import nim1 from "../assets/screenshots/nim1.jpeg";
import nim2 from "../assets/screenshots/nim2.jpeg";
import nim3 from "../assets/screenshots/nim3.png";
import nim4 from "../assets/screenshots/nim4.jpeg";
import nim5 from "../assets/screenshots/nim5.png";
import nim6 from "../assets/screenshots/nim6.png";
import nim7 from "../assets/screenshots/nim7.png";
import nim8 from "../assets/screenshots/nim8.jpeg";
const projects = [
  {
    name: "RTO Connect",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe", "DialogFlow"],
    description: "Regional Transport Office Automation Portal",
    features: [
      "Secure user authentication using JWT with role-based access.",
      "Integrated Stripe for payment processing.",
      "Developed a chatbot using DialogFlow for instant user assistance."
    ],
    github: "https://github.com/thestutirajeev/rto-connect",
    images: [rto1, rto2, rto3, rto4, rto5, rto6]
  },
  {
    name: "Swasth Saarthi",
    techStack: ["JSP", "Servlet", "MVC", "Oracle"],
    description: "Rural Healthcare Awareness WebApp",
    features: [
      "Online platform to enhance rural healthcare awareness.",
      "Modules for residents, healthcare workers, and administrators.",
      "Appointment booking and health event tracking."
    ],
    github: "https://github.com/thestutirajeev/SwasthSaarthi",
    images: []
  },
  {
    name: "Stock Master",
    techStack: ["Python", "Tkinter", "APIs", "bcrypt.js"],
    description: "Python-Based Stock Market Analysis Tool",
    features: [
      "Real-time stock data fetch using APIs.",
      "Secure authentication with bcrypt.js.",
      "Interactive GUI for stock trend analysis."
    ],
    github: "https://github.com/thestutirajeev/Stock_Master",
    images: []
  },
  {
    name: "Nimantran",
    techStack: ["Kotlin", "Android", "Firebase"],
    description: "Invitation Designing & Gifting App",
    features: [
      "Digital invitation and gifting platform.",
      "Guest list management and RSVP tracking.",
      "Personalized templates and gift-sending features."
    ],
    github: "https://github.com/thestutirajeev/nimantran",
    images: [nim1, nim2, nim3, nim4, nim5, nim6, nim7, nim8]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-12"
      style={{ backgroundImage: `url(${backgroundimage})` }}>
      <h2 className="text-4xl md:text-5xl font-bold text-brown-700 mb-12 text-center">
        Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-brown-50 border-l-8 border-brown-600 p-6 rounded-xl shadow-md cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-brown-800">
                {project.name}
              </h3>
              <div className="flex items-center gap-3">
  {/* GitHub Icon with circle */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="w-10 h-10 rounded-full border border-brown-500 flex items-center justify-center hover:bg-brown-100"
  >
    <Github className="w-5 h-5 text-brown-700" />
  </a>

  {/* Camera icon for screenshots */}
  {project.images.length > 0 && (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleProjectClick(project);
      }}
      className="w-10 h-10 rounded-full border border-brown-500 flex items-center justify-center hover:bg-brown-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-brown-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-1.142a1 1 0 01.947.316l.833.832a2 2 0 01.667 1.414v4.18a2 2 0 01-.667 1.415l-.833.831a1 1 0 01-.947.317L15 16m0-6V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v5m0 0H5a2 2 0 00-2 2v3a2 2 0 002 2h6m4 0h6"
        />
      </svg>
    </button>
  )}
</div>

            </div>

            <p className="text-gray-700 mb-4 italic">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-brown-100 text-brown-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Popup for screenshots */}
      {selectedProject && (
        <ProjectSS
          images={selectedProject.images}
          onClose={closePopup}
        />
      )}
    </section>
  );
};

export default Projects;
