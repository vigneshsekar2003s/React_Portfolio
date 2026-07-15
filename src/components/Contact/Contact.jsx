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

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_h8i0z6c",
        "template_9nfpjs3",
        form.current,
        "MI9FWtC8mRssQXekj"
      )
      .then(() => {
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.h2
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
              I'm always interested in internships, full-time roles, and
              exciting web development projects.
            </p>

            <div className="info-card">
              <FaEnvelope />
              <span>vigneshsekar2003s@gmail.com</span>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <span>+91 9363922536</span>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <span>Tamil Nadu, India</span>
            </div>

            <div className="social-icons">
              <a
                href="https://github.com/vigneshsekar2003s"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vignesh-sekar-1526bb26a"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
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
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
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
              rows="6"
              placeholder="Your Message"
              required
            />

            <button type="submit">
            <FaPaperPlane />
            Send Message
           </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;