import "./About.css";
import { memo } from "react";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-container">

        {/* Profile Image */}
        <div className="about-image">
          <img
            src="/vignesh.png"
            alt="Vignesh Sekar - Full Stack Developer"
            width="420"
            height="420"
            loading="lazy"
          />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2 id="about-heading">
            About Me
          </h2>

          <p>
          I'm <span>Vignesh Sekar</span>, a Computer Science graduate focused on
          full-stack development, modern web applications, database-driven
          solutions, responsive UI/UX design, REST API development, and practical
          AI/ML learning.
          </p>

          <div className="about-cards">
            <article className="card">
              <FaUserGraduate
                className="icon"
                aria-hidden="true"
              />

              <h3>Education</h3>

              <p>B.E. Computer Science & Engineering</p>
            </article>

            <article className="card">
              <FaLaptopCode
                className="icon"
                aria-hidden="true"
              />

              <h3>Skills</h3>

              <p>Java • JavaScript • C • Python</p>
            </article>

            <article className="card">
              <FaBriefcase
                className="icon"
                aria-hidden="true"
              />

              <h3>Goal</h3>

              <p>
                Become a Full Stack Developer and build impactful
                applications.
              </p>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}

export default memo(About);