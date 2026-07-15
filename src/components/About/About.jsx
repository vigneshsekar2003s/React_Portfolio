import "./About.css";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I'm <span>Vignesh Sekar</span>, a passionate Web Developer who enjoys
          creating modern, responsive, and interactive web applications using
          React.js. I used to solve problems and continuously learning new
          technologies.
        </p>

        <div className="about-cards">
          <div className="card">
            <FaUserGraduate className="icon" />
            <h3>Education</h3>
            <p>B.E. Computer Science & Engineering</p>
          </div>

          <div className="card">
            <FaLaptopCode className="icon" />
            <h3>Skills</h3>
            <p>Java • JavaScript • C • Python</p>
          </div>

          <div className="card">
            <FaBriefcase className="icon" />
            <h3>Goal</h3>
            <p>Become a Full Stack Developer and build impactful applications.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;