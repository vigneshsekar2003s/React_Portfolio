import "./Hero.css";
import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Designer",
  "Problem Solver",
  "Full Stack Developer",
];

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let typed;
    let mounted = true;

    async function initTyped() {
      const Typed = (await import("typed.js")).default;

      if (!mounted || !typedRef.current) return;

      typed = new Typed(typedRef.current, {
        strings: roles,
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }

    initTyped();

    return () => {
      mounted = false;
      typed?.destroy();
    };
  }, []);

  return (
    <section className="hero" id="home">

      {/* Left */}
      <motion.div
        className="hero-left"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <span className="hero-tag">
          👋 Welcome to my Portfolio
        </span>

        <h1 id="hero-heading">
          I'm <span>Vignesh Sekar</span>
        </h1>

        <h2>
          <span ref={typedRef}></span>
        </h2>

        <p className="description">
          Vignesh Sekar is a Full Stack Developer building modern
          React and MERN web applications with clean UI,
          responsive design, and seamless user experiences.
        </p>

        <div className="hero-buttons">

          <a
            href="/SDE_MERN_Resume.pdf"
            download="SDE_MERN_Resume.pdf"
            aria-label="Download Vignesh Sekar Resume"
          >
            <FaDownload aria-hidden="true" />
            Resume
          </a>

          <a
            href="#contact"
            className="hire-btn"
            aria-label="Contact Vignesh Sekar"
          >
            💼 Hire Me
          </a>

          <a
            href="https://github.com/vigneshsekar2003s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vignesh Sekar GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-sekar-1526bb26a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vignesh Sekar LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

        </div>
      </motion.div>

      {/* Right */}
      <div className="hero-right">

        <div className="image-circle">

          <img
            src="/Profile-Vignesh-Sekar.webp"
            alt="Vignesh Sekar - Full Stack Developer"
            title="Vignesh Sekar"
            width="420"
            height="420"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

        </div>

      </div>

    </section>
  );
}

export default memo(Hero);