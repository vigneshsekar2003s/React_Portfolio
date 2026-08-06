import "./Skills.css";
import { memo } from "react";

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
    <section
      className="skills"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="skills-container">
        <h2 id="skills-heading">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card"
            >
              <div
                className="skill-icon"
                aria-hidden="true"
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);