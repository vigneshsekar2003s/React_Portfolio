
import "./Skills.css";
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiStreamlit, } from "react-icons/si";

const skillGroups = [
  {
    title: "Full-Stack Development",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js & REST APIs", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: FaGitAlt },

    ],
  },
  {
    title: "AI & Programming",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "RAG & Semantic Search", icon: FaDatabase },
      { name: "Sentence Transformers", icon: FaCode },
      { name: "FAISS", icon: FaDatabase },
      { name: "Streamlit", icon: SiStreamlit },
    ], 
  },
];

function Skills() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="skills"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="skills-container">
        <motion.h2
          id="skills-heading"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
          }}
        >
          My Skills
        </motion.h2>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <motion.article
              className="skills-group"
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <h3>{group.title}</h3>

              <div className="skills-list">
                {group.skills.map(({ name, icon: Icon }) => (
                  <motion.div
                    className="skill-item"
                    key={name}
                    variants={cardVariants}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -5,
                            scale: 1.03,
                            transition: { duration: 0.2 },
                          }
                    }
                  >
                    <Icon
                      className="skill-icon"
                      aria-hidden="true"
                    />
                    <span>{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
