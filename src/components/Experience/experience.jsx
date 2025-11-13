import React from "react";
import "./experience.css";
import { BsBriefcase } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import GlowCard from "../GlowCard/glowcard";

const experiences = [
  {
    id: 1,
    title: "Backend Software Engineer",
    company: "Riseup Labs",
    companyWebsite: "https://riseuplabs.com/",
    duration: "September 2025 – Present",
    description: [
      "Designing, developing, and maintaining scalable backend systems using Python and Django.",
      "Building RESTful APIs with Django REST Framework (DRF) to power web and mobile applications.",
      "Implementing authentication, permissions, and optimized querysets for secure and efficient data handling.",
      "Integrating third-party APIs and managing background tasks using Celery and Redis.",
      "Collaborating with frontend and mobile teams to ensure seamless API integration and consistent data flow.",
      "Deploying applications using Docker, Gunicorn, and Nginx while maintaining CI/CD workflows.",
      "Optimizing database performance and caching for improved scalability and reliability."
    ],
    tools: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
      "Git",
      "Nginx"
    ],
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Beyond Bracket Ltd.",
    companyWebsite: "https://beyondbracket.com/",
    duration: "January 2025 – July 2025",
    description: [
      "Assisted in building backend modules and RESTful APIs using Python and Django REST Framework.",
      "Developed and maintained database models, serializers, and viewsets to support dynamic data operations.",
      "Implemented JWT authentication, role-based permissions, and API versioning for secure access control.",
      "Worked on caching strategies and background task queues using Redis and Celery.",
      "Contributed to testing and debugging to enhance API reliability and response time.",
      "Collaborated with senior engineers on deployment, containerization, and API documentation.",
      "Participated in agile sprints, code reviews, and collaborative problem-solving sessions."
    ],
    tools: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Git",
      "Swagger"
    ],
  },
];


function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-title-container">
        <div className="experience-divider"></div>
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-divider"></div>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <GlowCard
            key={experience.id}
            identifier={`experience-${experience.id}`}
          >
            <div className="experience-card">
              <div className="experience-duration">{experience.duration}</div>
              <div className="experience-content">
                <div className="experience-icon">
                  <BsBriefcase size={36} />
                </div>
                <div>
                  <h3 className="job-title">{experience.title}</h3>
                  <p className="experience-company">
                    {experience.company}{" "}
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-website-link"
                      aria-label={`${experience.company} website`}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </p>
                  <ul className="experience-description-list">
                    {experience.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <div className="experience-tools">
                    <strong>Tools & Technologies:</strong>
                    <div className="tools-badge-container">
                      {experience.tools.map((tool, index) => (
                        <span key={index} className="tool-badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Experience;
