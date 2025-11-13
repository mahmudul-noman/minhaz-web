import React from "react";
import "./certificate.css";
import { FiExternalLink } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const certifications = [
  {
    title: "Python for Beginners",
    organisation: "University of Moratuwa",
    skills: "Python programming, object-oriented principles",
    date: "Nov 2023",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "Django Fundamentals",
    organisation: "LinkedIn Learning",
    skills: "Django models, views, templates, routing, REST APIs",
    date: "Jan 2024",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "Advanced Django & REST APIs",
    organisation: "Coursera",
    skills: "REST framework, authentication, deployment, optimization",
    date: "Mar 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE",
  },
  {
    title: "Full Stack Python Web Development",
    organisation: "Udemy",
    skills: "Python, Django, JavaScript, HTML, CSS, PostgreSQL",
    date: "Apr 2024",
    link: "https://www.udemy.com/certificate/EXAMPLE",
  },
];

const Certificate = () => {
  return (
    <section id="certificates" className="certificate-section">
      <div className="certificate-header-container">
        <div className="certificate-divider"></div>
        <h2 className="certificate-header">Python & Django Certifications</h2>
        <div className="certificate-divider"></div>
      </div>
      <p className="certificate-description">
        Here is a selection of Python and Django certifications I’ve earned to
        deepen my expertise and stay current with web development technologies.
      </p>
      <div className="certificate-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-ribbon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-organisation">{cert.organisation}</p>
            <p className="certificate-skills">
              <strong>Skills Covered:</strong> {cert.skills}
            </p>
            <p className="certificate-date">
              <strong>Date:</strong> {cert.date}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
                aria-label={`View certification for ${cert.title}`}
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
