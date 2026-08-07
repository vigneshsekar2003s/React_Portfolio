import { memo } from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    icon: FaBriefcase,
    title: "Web Development Intern",
    company: "Krutanic Solutions",
    duration: "Mar 2025 - Jun 2025",
    description:
      "Worked on responsive web applications using React.js, JavaScript, HTML, CSS, and Git. Collaborated with the development team to build reusable UI components.",
  },
];

function Experience() {
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="experience-container">
        <h2 id="experience-heading">
          Experience
        </h2>

        <div className="timeline">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="timeline-item"
              >
                <div
                  className="timeline-icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>

                  <h4>{item.company}</h4>

                  <time dateTime="2025-03/2025-06">
                    {item.duration}
                  </time>

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);