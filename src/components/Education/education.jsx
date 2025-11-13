import React from "react";
import "./education.css";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const educations = [
  {
    id: 1,
    title: "Bachelor of Science (BSc) in Computer Science and Engineering",
    // grade: "Ongoing",
    institution: "Daffodil International University, Bangladesh",
    duration: "January 2019 – January 2023",
    grade: "CGPA: 3.85 / 4.00",
    coursework:
      "Data Structures and Algorithms, Database Systems, Software Engineering, Web Application Development, Artificial Intelligence, Computer Networks",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-title-container">
        <div className="education-divider"></div>
        <h2 className="education-title">Education</h2>
        <div className="education-divider"></div>
      </div>

      <div className="education-grid">
        {educations.map((education) => (
          <GlowCard key={education.id} identifier={`education-${education.id}`}>
            <div className="education-card">
              <div className="education-duration">{education.duration}</div>
              <div className="education-content">
                <div className="education-icon">
                  <BsPersonWorkspace size={36} />
                </div>
                <div>
                  <h3 className="education-degree">
                    {education.title}
                    {education.grade && (
                      <>
                        <br />
                        <span className="education-grade">
                          {education.grade}
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="education-institution">
                    {education.institution}
                  </p>
                  {education.coursework && (
                    <p className="education-coursework">
                      <strong>Relevant Coursework:</strong>{" "}
                      {education.coursework}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Education;
