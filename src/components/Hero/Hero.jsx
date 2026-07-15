import "./Hero.css";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import Profile from "../../assets/image/Profile.png";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "UI Designer",
        "Problem Solver",
        "Full Stack Developer",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="home">
      {/* Floating Icons */}

      <div className="floating-icons">
        <FaReact className="react" />
        <FaHtml5 className="html" />
        <FaCss3Alt className="css" />
        <FaJs className="js" />
      </div>

      {/* Left */}

      <motion.div
        className="hero-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-tag">👋 Welcome to my Portfolio</span>

        <h1>
          I'm <span>Vignesh Sekar</span>
        </h1>

        <h2>
          <span ref={typedRef}></span>
        </h2>

       <p className="description">
        Passionate Full Stack Developer building modern MERN web
        applications with clean UI, responsive design, and seamless
        user experiences.
      </p>

        <div className="hero-buttons">
          <a href="/ATS_Vignesh.pdf" download>
            <FaDownload />
            Resume
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="hire-btn"
          >
            Hire Me
          </Link>

          <a
            href="https://github.com/vigneshsekar2003s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-sekar-1526bb26a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Right */}

      <motion.div
        className="hero-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-circle">
          <img
            src={Profile}
            alt="Vignesh Sekar"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;