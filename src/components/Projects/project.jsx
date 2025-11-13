import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import socialMediaImage from "../../assets/social-media-homepage.png";
import ecommerceImage from "../../assets/ecommerce-homepage.png";
import taskManagerImage from "../../assets/task-manager-homepage.png";
import blogPlatformImage from "../../assets/blog-platform-homepage.png";
import elearningImage from "../../assets/elearning-homepage.png";

function Projects() {
  const projects = [
    {
      name: "Social Media Platform (Django)",
      description:
        "A full-stack social media platform built with Django and Django REST Framework. Features user registration, authentication, posting, likes, comments, and profile management. Integrated with a responsive React frontend.",
      tools: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "Tailwind CSS",
        "Docker",
        "Git",
      ],
      github: "https://github.com/yourusername/social-media-django",
      demo: "https://socialmedia-django-demo.vercel.app/",
      image: socialMediaImage,
    },
    {
      name: "E-commerce Web Application (Django)",
      description:
        "A scalable e-commerce platform built with Django and DRF. Supports product listings, shopping cart, checkout, payment integration, and admin dashboards. Backend optimized with PostgreSQL and Redis caching.",
      tools: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "React",
        "Tailwind CSS",
        "Docker",
      ],
      github: "https://github.com/yourusername/django-ecommerce",
      demo: "https://django-ecommerce-demo.vercel.app/",
      image: ecommerceImage,
    },
    {
      name: "Task Manager API (Django REST Framework)",
      description:
        "A RESTful task management backend built with Django REST Framework. Supports CRUD operations, user authentication, task categorization, and status tracking. Frontend integration can be done with React or Next.js.",
      tools: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Git",
      ],
      github: "https://github.com/yourusername/django-task-manager",
      demo: "https://django-ecommerce-demo.vercel.app/",
      image: taskManagerImage,
    },
    {
      name: "Blog Platform (Django)",
      description:
        "A content management and blogging platform built with Django. Features user registration, blog creation, comments, categories, search, and admin panel for content management.",
      tools: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
      ],
      github: "https://github.com/yourusername/django-blog-platform",
      demo: "https://django-blog-demo.vercel.app/",
      image: blogPlatformImage,
    },
    {
      name: "Online Learning Platform (Django)",
      description:
        "Backend for an e-learning platform built with Django and DRF. Features course creation, video content hosting, user enrollment, progress tracking, and quiz management.",
      tools: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Git",
      ],
      github: "https://github.com/yourusername/django-elearning",
      demo: "https://django-blog-demo.vercel.app/",
      image: elearningImage,
    },
  ];

  return (
    <section id="projects" className="projects-section" aria-label="Projects">
      <div className="projects-header">
        <div className="projects-divider"></div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-divider"></div>
      </div>

      <p className="projects-description">
        I’m passionate about building software that is efficient and
        well-crafted. With a strong focus on quality and attention to detail, I
        ensure every project meets high standards. I leverage my Python/Django
        expertise to deliver impactful digital solutions.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool">
                  {tool}
                </span>
              ))}
            </div>
            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`GitHub repository for ${project.name}`}
                >
                  <FaGithub size={30} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                  aria-label={`Live demo of ${project.name}`}
                >
                  <GrView size={25} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
