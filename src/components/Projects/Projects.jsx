import "./Projects.css";
import { memo } from "react";
import { FaGithub } from "react-icons/fa";

import ExpenseTracker from "../../assets/projects/Expense-Tracker.webp";
import CRM from "../../assets/projects/CRM_Project.webp";
import schedulingApp from "../../assets/projects/ST_Scheduling.webp";

const projects = [
  {
    title: "Smart-Time Scheduling App",
    image: schedulingApp,
    description:
      "A responsive time scheduling application built with React and Framer Motion.",
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Framer Motion",
    ],
    github: "https://github.com/yourusername/scheduling-app",
  },
  {
    title: "Expense Tracker App",
    image: ExpenseTracker,
    description:
      "Expense tracking application with budgeting features.",
    technologies: [
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    github:
      "https://github.com/vigneshsekar2003s/Frontend_ExpenseApp",
  },
  {
    title: "Customer-Relationship Management App",
    image: CRM,
    description:
      "CRM application for managing customer interactions and relationships.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
    ],
    github:
      "https://github.com/vigneshsekar2003s/CRM_Frontend",
  },
];

function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="projects-container">
        <h2 id="projects-heading">
          My Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                width="500"
                height="300"
                loading="lazy"
                decoding="async"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);