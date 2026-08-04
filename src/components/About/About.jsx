import "./About.css";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section
          className="about"
          id="about"
          aria-labelledby="about-heading"
        >
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
         <h2 id="about-heading">About Me</h2>

        <p>
          I'm <span>Vignesh Sekar</span>, a passionate Software Developer who enjoys
          building modern, responsive, and interactive web applications. I love solving problems and continuously learning new
          technologies.
        </p>

        <div className="about-cards">
          <div className="card">
            <FaUserGraduate
              className="icon"
              aria-hidden="true"
            />
            <h3>Education</h3>
            <p>B.E. Computer Science & Engineering</p>
          </div>

          <div className="card">
            <FaLaptopCode 
            className="icon" 
            aria-hidden="true" 
            />
            <h3>Skills</h3>
            <p>Java • JavaScript • C • Python</p>
          </div>

          <div className="card">
            <FaBriefcase 
            className="icon" 
            aria-hidden="true" 
            />
            <h3>Goal</h3>
            <p>Become a Full Stack Developer and build impactful applications.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;