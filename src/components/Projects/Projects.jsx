import "./Projects.css";
import { memo } from "react";
import { FaGithub } from "react-icons/fa";

import SchedulingApp from "../../assets/projects/ST_Scheduling.webp";
import CRM from "../../assets/projects/CRM_Project.webp";
import ResumeAnalyzer from "../../assets/projects/AI-Resume_Analyzer.png"

const projects = [
  {
    title: "Smart-Time Scheduling App",
    image: SchedulingApp,
    description:
      "A responsive time scheduling application built with React and modern UI design.",
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Framer Motion",
    ],
    github: "https://github.com/vigneshsekar2003s/SmartTime_client",
  },

  {
    title: "Customer Relationship Management App",
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

{
  title: "AI Resume RAG Analyzer",
  image: ResumeAnalyzer,
  description:
    "AI-powered resume analyzer using Python, Streamlit, and RAG for skill matching and resume improvement suggestions.",
  technologies: [
    "Python",
    "Streamlit",
    "RAG",
    "Sentence Transformers",
    "Groq API",
  ],
  github:
    "https://github.com/vigneshsekar2003s/AI-Resume---RAG-Analyzer-",
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
            <article
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
                fetchPriority="low"
                draggable="false"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);