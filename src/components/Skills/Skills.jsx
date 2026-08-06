import "./Skills.css";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";

function Skills() {
  const skills = useMemo(
    () => [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss />, name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaCode />, name: "C" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
    ],
    []
  );

  return (
    <section
      className="skills"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="skills-heading">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
            >
              <div
                className="skill-icon"
                aria-hidden="true"
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Skills);