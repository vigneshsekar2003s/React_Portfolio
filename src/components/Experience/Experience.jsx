import { memo, useMemo } from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = useMemo(
    () => [
      {
        icon: FaBriefcase,
        title: "Web Development Intern",
        company: "Krutanic Solutions",
        duration: "Mar 2025 - Jun 2025",
        description:
          "Worked on responsive web applications using React.js, JavaScript, HTML, CSS, and Git. Collaborated with the development team to build reusable UI components.",
      },
    ],
    []
  );

  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="experience-container">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="timeline-item"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">
                  <Icon aria-hidden="true" />
                </div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>

                  <h4>{item.company}</h4>

                  <span>{item.duration}</span>

                  <p>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);