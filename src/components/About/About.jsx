
import "./About.css";
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const aboutText =
  "I'm Vignesh Sekar, a Computer Science graduate focused on full-stack development, modern web applications, database-driven solutions, responsive UI/UX design, REST API development, and practical AI/ML learning.";

function SplitText({ text, className = "", as = "p", id }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Tag = as === "h2" ? motion.h2 : motion.p;

  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.045,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="split-word"
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 18,
                filter: reduceMotion ? "none" : "blur(5px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: reduceMotion ? 0 : 0.4,
                  ease: "easeOut",
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

const aboutCards = [
  {
    title: "Education",
    description: "B.E. Computer Science & Engineering",
    icon: FaUserGraduate,
  },
  {
    title: "Skills",
    description: "Java • JavaScript • C • Python",
    icon: FaLaptopCode,
  },
  {
    title: "Goal",
    description:
      "Become a Full Stack Developer and build impactful applications.",
    icon: FaBriefcase,
  },
];

function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-container">
        {/* Profile Image */}
        <motion.div
          className="about-image"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
        >
          <img
            src="/vignesh.webp"
            alt="Vignesh Sekar - Full Stack Developer"
            width="500"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* About Content */}
        <div className="about-content">
          <SplitText
            id="about-heading"
            text="About Me"
            className="about-title"
            as="h2"
          />

          <SplitText
            text={aboutText}
            className="about-description"
          />

          {/* Education, Skills and Goal Cards */}
          <motion.div
            className="about-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.15,
                },
              },
            }}
          >
            {aboutCards.map(
              ({ title, description, icon: Icon }) => (
                <motion.article
                  className="card"
                  key={title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: reduceMotion ? 0 : 25,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: reduceMotion ? 0 : 0.45,
                      },
                    },
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -6, scale: 1.02 }
                  }
                >
                  <Icon
                    className="icon"
                    aria-hidden="true"
                  />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.article>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
