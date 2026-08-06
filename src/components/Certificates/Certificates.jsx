import "./Certificates.css";
import { memo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import WebDevelopment from "../../assets/certificates/Training_Certificate.webp";
import SpokenTutorial from "../../assets/certificates/CSS_Certificate.webp";
import NationalConference from "../../assets/certificates/Conference_Certificate.webp";

const certificates = [
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
];

function Certificates() {
  return (
    <section
      className="certificates"
      id="certificates"
      aria-labelledby="certificates-heading"
    >
      <div className="certificates-container">
        <h2 id="certificates-heading">
          Certificates
        </h2>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="certificate-card"
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                width="500"
                height="350"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Certificates);