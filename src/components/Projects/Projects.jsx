import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ExpenseTracker from "../../assets/projects/Expense-Tracker.png";
import CRM from "../../assets/projects/CRM_Project.png";
import schedulingApp from "../../assets/projects/ST_Scheduling.png";

const projects = [
  {
    title: "Smart-Time Scheduling App",
    image: schedulingApp,
    description:
      "A responsive time scheduling application built with React and Framer Motion.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Express.js", "Framer Motion"],
    github: "https://github.com/yourusername/scheduling-app",
  },
  {
    title: "Expense Tracker App",
    image: ExpenseTracker,
    description:
      "Expense tracking application with budgeting features.",
    technologies: ["React", "MongoDB", "Node.js", "Express.js", "REST APIs"],
    github: "https://github.com/vigneshsekar2003s/Frontend_ExpenseApp",
  },
  {
    title: "Customer-Relationship Management App",
    image: CRM,
    description:
      "CRM application for managing customer interactions and relationships.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/vigneshsekar2003s/CRM_Frontend",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img src={project.image} alt={project.title} />

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
                    rel="noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;