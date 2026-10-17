import "./Projects.css";
import { memo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Your image imports go here
import SchedulingApp from "../../assets/projects/ST_Scheduling.webp";
import CRM from "../../assets/projects/CRM_Project.webp";
import ResumeAnalyzer from "../../assets/projects/AI-Resume_Analyzer.webp";

const projects = [
    {
    title: "Smart-Time Scheduling App",
    number: "01",
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
    github:
      "https://github.com/vigneshsekar2003s/SmartTime_client",
  },
  {
    title: "Customer Relationship Management App",
    number: "02",
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
    number: "03",
    image: ResumeAnalyzer,
    description:
      "AI-powered resume analysis using Python, Streamlit, and RAG to identify skills and suggest improvements.",
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

  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CoverFlowProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const getOffset = (index) => {
    const total = projects.length;
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + projects.length) % projects.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      (current + 1) % projects.length
    );
  };

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>
          <h2 id="projects-heading">Featured Projects</h2>
          <p>
            Explore my full-stack and AI projects in an interactive
            CoverFlow experience.
          </p>
        </div>

        <div className="coverflow">
          <div className="coverflow-stage">
            {projects.map((project, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;

              return (
                <motion.article
                  key={project.title}
                  className={`project-card project-card-motion ${
                    isActive ? "coverflow-active" : ""
                  }`}
                  animate={{
                    x: `${offset * 72}%`,
                    scale: isActive ? 1 : 0.78,
                    rotateY: reduceMotion ? 0 : offset * -32,
                    opacity: Math.abs(offset) > 1 ? 0 : 1,
                    zIndex: projects.length - Math.abs(offset),
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 180,
                          damping: 24,
                        }
                  }
                  onClick={() => setActiveIndex(index)}
                  role="group"
                  aria-label={`${project.title}${
                    isActive ? ", selected project" : ""
                  }`}
                  style={{
                    pointerEvents: Math.abs(offset) > 1 ? "none" : "auto",
                  }}
                >
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width="500"
                      height="300"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                    <span className="project-number">
                      {project.number}
                    </span>
                  </div>

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
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span>View Source</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="coverflow-controls">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>

            <div className="coverflow-indicators">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  className={
                    activeIndex === index ? "active" : ""
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show project ${index + 1}: ${project.title}`}
                  aria-pressed={activeIndex === index}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>

          <p className="coverflow-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(CoverFlowProjects);