import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import heroimage from "../../assets/hero-image.png";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="heroSection" aria-label="Introduction">
      <div className="heroContainer">
        <p className="heroHello" aria-label="Greeting">
          Hello,
        </p>
        <h1 className="heroTitle">
          I'm <span className="heroName">Minhaz</span> Uddin
        </h1>
        <h2 className="heroSubtitle">Backend Engineer (Python)</h2>
        <p className="heroDescription">
          I’m a backend software engineer specializing in Python and Django,
          passionate about building scalable, secure, and high-performing
          systems. I love turning ideas into reliable APIs and backend
          architectures that empower seamless digital experiences.
        </p>
        <div
          className="iconRow"
          role="navigation"
          aria-label="Social media links"
        >
          <a
            href="https://www.linkedin.com/in/yoonus-ajward-461064239/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yoonusajward"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:yoonusajward27@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="buttonRow">
          <a
            href={`${process.env.PUBLIC_URL}/Minhaz_Software Engineer_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="heroBtn"
            aria-label="Download Resume"
          >
            <FaDownload className="icon" /> Download Resume
          </a>
          <Link
            to="contact"
            smooth
            duration={500}
            aria-label="Scroll to Contact section"
          >
            <button className="heroBtn">
              <FaEnvelope className="icon" /> Contact Me
            </button>
          </Link>
        </div>
      </div>
      <img
        src={heroimage}
        alt="Portrait of Yoonus Ajward"
        className="heroImage"
      />
    </section>
  );
};

export default Hero;
