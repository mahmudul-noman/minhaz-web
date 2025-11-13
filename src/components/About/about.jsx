import React from "react";
import "./about.css";
import aboutImage from "../../assets/about-image.png";

const About = () => {
  return (
    <section id="about" className="aboutSection" aria-label="About Me">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2 className="aboutHeading">About Me</h2>
          <p className="aboutDescription">
            I'm <strong>Minhaz Uddin</strong>, a passionate and dedicated
            Backend Software Engineer specializing in Python and Django. I enjoy
            building scalable, secure, and efficient backend systems that power
            seamless user experiences. With a strong foundation in full-stack
            development, I focus on writing clean, maintainable code, designing
            RESTful APIs, and ensuring performance optimization across all
            layers of a project. I’m a self-driven learner, always exploring new
            backend technologies, cloud solutions, and DevOps practices to
            enhance my technical depth and deliver real-world impact.
          </p>
        </div>
        <div className="aboutImageContainer">
          <img
            src={aboutImage}
            alt="Yoonus Ajward - Software Engineer"
            className="aboutImage"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
