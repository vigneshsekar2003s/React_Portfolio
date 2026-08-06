import { memo } from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>Vignesh Sekar</h2>

        <p>
          Frontend Developer | React Developer | Full Stack Developer
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/vigneshsekar2003s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-sekar-1526bb26a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>

        <button
          className="top-btn"
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
        >
          <FaArrowUp aria-hidden="true" />
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Vignesh Sekar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default memo(Footer);