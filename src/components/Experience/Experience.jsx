import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    icon: <FaBriefcase />,
    title: "Web Development Intern",
    company: "Krutanic Solutions",
    duration: "Mar 2025 - Jun 2025",
    description:
      "Worked on responsive web applications using React.js, JavaScript, HTML, CSS, and Git. Collaborated with the development team to build reusable UI components.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <span>{item.duration}</span>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;