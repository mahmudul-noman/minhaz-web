import React from "react";
import { FaPython, FaGithub, FaDocker, FaServer, FaAws, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiDjango, SiFlask, SiPostgresql, SiMysql, SiRedis, SiPostman, SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

import "./skills.css";

function Skills() {
  const skills = [
    {
      category: "Backend & Programming",
      items: [
        { name: "Python", icon: <FaPython size={40} /> },
        { name: "Django", icon: <SiDjango size={40} /> },
        { name: "Django REST Framework", icon: <SiDjango size={40} /> },
        { name: "Flask", icon: <SiFlask size={40} /> },
        { name: "REST APIs", icon: <SiPostman size={40} /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
        { name: "MySQL", icon: <SiMysql size={40} /> },
        { name: "Redis", icon: <SiRedis size={40} /> },
      ],
    },
    {
      category: "Frontend (Supporting)",
      items: [
        { name: "React", icon: <FaReact size={40} /> },
        { name: "Next.js", icon: <SiNextdotjs size={40} /> },
        { name: "HTML", icon: <FaHtml5 size={40} /> },
        { name: "CSS", icon: <FaCss3 size={40} /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill size={40} /> },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git & GitHub", icon: <FaGithub size={40} /> },
        { name: "Docker", icon: <FaDocker size={40} /> },
        { name: "Nginx", icon: <FaServer size={40} /> },
        { name: "AWS", icon: <FaAws size={40} /> },
        { name: "VS Code", icon: <VscVscode size={40} /> },
      ],
    },
  ];

  return (
    <div id="skills" className="skills-section">
      <div className="skills-header">
        <div className="skills-divider"></div>
        <h2 className="skills-title">Skills</h2>
        <div className="skills-divider"></div>
      </div>

      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skills-grid">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
