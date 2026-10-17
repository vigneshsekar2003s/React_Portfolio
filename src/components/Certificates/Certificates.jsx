import "./Certificates.css";
import { memo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

import WebDevelopment from "../../assets/certificates/Training_Certificate.webp";
import SpokenTutorial from "../../assets/certificates/CSS_Certificate.webp";
import NationalConference from "../../assets/certificates/Conference_Certificate.webp";

const certificates = [
  {
    title: "Web Development Internship",
    image: WebDevelopment,
    issuer: "Krutanic Solutions",
  },
  {
    title: "Spoken Tutorial - CSS Training",
    image: SpokenTutorial,
    issuer: "Spoken Tutorial Project, IIT Bombay",
  },
  {
    title: "National Conference on Advanced Science",
    image: NationalConference,
    issuer: "INFO Institute of Engineering",
  },
];

function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % certificates.length);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + certificates.length) % certificates.length
    );
  };

  const certificate = certificates[activeIndex];

  return (
    <section
      className="certificates"
      id="certificates"
      aria-labelledby="certificates-heading"
    >
      <div className="certificates-container">
        <div className="certificates-heading">
          <h2 id="certificates-heading">Certificates</h2>
          <span className="certificates-eyebrow">MY ACHIEVEMENTS</span>
          <p>
            Training, professional development, and academic achievements.
          </p>
        </div>

        <div className="vertical-certificate-slider">
          <button
            type="button"
            className="vertical-slider-button"
            onClick={showPrevious}
            aria-label="Previous certificate"
          >
            <FaChevronUp />
          </button>

          <div className="vertical-slider-window">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeIndex}
                className="vertical-certificate-card"
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 55,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -55,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 180,
                        damping: 24,
                      }
                }
              >
                <a
                  className="vertical-certificate-image"
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${certificate.title} image`}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    width="500"
                    height="350"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </a>

                <div className="certificate-content">
                  <span className="vertical-certificate-number">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>

                  <a
                    className="certificate-link"
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="vertical-slider-button"
            onClick={showNext}
            aria-label="Next certificate"
          >
            <FaChevronDown />
          </button>

          <div className="vertical-slider-indicators">
            {certificates.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-pressed={activeIndex === index}
              />
            ))}
          </div>

          <p className="certificate-counter" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(certificates.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(Certificates);