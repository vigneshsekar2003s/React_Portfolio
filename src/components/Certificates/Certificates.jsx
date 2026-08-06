import "./Certificates.css";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import WebDevelopment from "../../assets/certificates/Training_Certificate.webp";
import SpokenTutorial from "../../assets/certificates/CSS_Certificate.webp";
import NationalConference from "../../assets/certificates/Conference_Certificate.webp";

function Certificates() {
  const certificates = useMemo(
    () => [
      {
        title: "Web Development Internship",
        image: WebDevelopment,
        issuer: "Krutanic Solutions",
        link: WebDevelopment,
      },
      {
        title: "Spoken Tutorial - CSS Training",
        image: SpokenTutorial,
        issuer: "Spoken Tutorial Project, IIT Bombay",
        link: SpokenTutorial,
      },
      {
        title: "National Conference on Advanced Science",
        image: NationalConference,
        issuer: "INFO Institute of Engineering",
        link: NationalConference,
      },
    ],
    []
  );

  return (
    <section
      className="certificates"
      id="certificates"
      aria-labelledby="certificates-heading"
    >
      <div className="certificates-container">
        <motion.h2
          id="certificates-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h2>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              className="certificate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                width="500"
                height="350"
                loading="lazy"
                decoding="async"
              />

              <div className="certificate-content">
                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${certificate.title}`}
                >
                  View Certificate{" "}
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Certificates);