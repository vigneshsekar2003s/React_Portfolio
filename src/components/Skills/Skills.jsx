import "./Skills.css";
import { motion } from "framer-motion";

import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";

import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";

const skills = [
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
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>My Skills</h2>

        <div className="skills-grid">
        {skills.map((skill, index) => (
  <motion.div
    key={skill.name}
    className="skill-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.4,
      delay: index * 0.08,
    }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05,
      y: -8,
    }}
  >
    <div className="skill-icon">{skill.icon}</div>
    <h3>{skill.name}</h3>
  </motion.div>
))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;