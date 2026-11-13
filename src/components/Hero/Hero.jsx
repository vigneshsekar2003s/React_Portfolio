
import "./Hero.css";
import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "React Developer",
  "AI & ML Enthusiast",
  "UI Designer",
  "Problem Solver",
];

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let typed;
    let cancelled = false;
    let timeoutId;
    let idleId;

    async function initTyped() {
      try {
        const { default: Typed } = await import("typed.js");

        // Prevent initialization after component unmount
        if (cancelled || !typedRef.current) return;

        typed = new Typed(typedRef.current, {
          strings: roles,
          typeSpeed: 70,
          backSpeed: 40,
          backDelay: 1500,
          loop: true,
          showCursor: true,
          cursorChar: "|",
        });
      } catch (error) {
        console.error("Unable to load Typed.js:", error);
      }
    }

    // Load Typed.js when the browser is idle
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(initTyped, {
        timeout: 2000,
      });
    } else {
      timeoutId = window.setTimeout(initTyped, 1200);
    }

    return () => {
      cancelled = true;

      if (idleId !== undefined) {
        window.cancelIdleCallback?.(idleId);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

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

        {/* Typed Text */}
        <h2>
          <span ref={typedRef}>Full Stack Developer</span>
        </h2>

        <p className="description">
          Passionate Full Stack Developer building modern web
          applications with clean UI, responsive design, and seamless
          user experiences.
        </p>

        <div className="hero-buttons">

          <a
            href="/Vignesh_Technical_Resume.pdf"
            download="Vignesh_Technical_Resume.pdf"
            aria-label="Download Vignesh Sekar Resume"
          >
            <FaDownload aria-hidden="true" />
            Resume
          </a>

          <a
            href="#contact"
            className="hire-btn"
            aria-label="Hire Vignesh Sekar"
          >
            💼 Hire Me
          </a>

          <a
            href="https://github.com/vigneshsekar2003s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vignesh Sekar on GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-sekar-s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vignesh Sekar on LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

        </div>
      </motion.div>

      {/* Right */}
      <div className="hero-right">
        <div className="image-circle">
          <img
            src="/profile-vignesh-sekar.webp"
            alt="Vignesh Sekar"
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
