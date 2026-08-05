import "./Certificates.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import WebDevelopment from "../../assets/certificates/Training_Certificate (1).jpg";
import SpokenTutorial from "../../assets/certificates/CSS_Certificate.png";
import NationalConference from "../../assets/certificates/Conference_Certificate.png";

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
        <motion.h2
          id="certificates-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h2>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              className="certificate-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
                <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
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
                View Certificate <FaExternalLinkAlt aria-hidden="true" />
              </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;