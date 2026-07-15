import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

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
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-sekar-1526bb26a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6B78TO5fTEqbcXTip%2BSLDQ%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <button
          className="top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Vignesh Sekar. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;