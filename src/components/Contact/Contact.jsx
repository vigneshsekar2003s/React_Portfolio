import { useRef, useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8i0z6c",
        "template_9nfpjs3",
        form.current,
        "MI9FWtC8mRssQXekj"
      )
  
      .then(() => {
      form.current.reset();
      setSuccess("Message sent successfully!");

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setSuccess("Failed to send message.");
    });

  };

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-wrapper">
          {/* Left Side */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect 👋</h3>

            <p>
              I'm always interested in Internships, Full-time roles, and
              exciting projects.
            </p>

            <div className="info-card">
              <FaEnvelope aria-hidden="true" />
              <span>vigneshsekar2003s@gmail.com</span>
            </div>

            <div className="info-card">
              <FaPhoneAlt aria-hidden="true" />
              <span>+91 9363922536</span>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Tamil Nadu, India</span>
            </div>

            <div className="social-icons">
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
          </motion.div>

          {/* Right Side */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              autoComplete="email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
            />

            <button type="submit">
            <FaPaperPlane aria-hidden="true" />
            Send Message
          </button>

          {success && <p className="success-message">{success}</p>}

          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;