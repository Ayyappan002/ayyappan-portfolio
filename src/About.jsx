import "./global.css";
import Image from "./assets/Image.png";

const About = () => {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="about-title">
        <h2>
          About <span>Me</span>
        </h2>
        <div className="about-line"></div>
      </div>

      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img
            src={Image}
            alt="Ayyappan"
          />

          <div className="about-badge">
            <h3>Fresher</h3>
            <p>Frontend Developer</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h3>
            I'm a passionate <span>Frontend Developer</span>
          </h3>

          <p>
            I am a B.Tech graduate specializing in Artificial Intelligence and
            Data Science. I focus on building responsive and scalable web
            applications using React, JavaScript and modern UI tools.
          </p>

          <p>
            I am highly interested in frontend development and user interface
            design, and I enjoy creating clean, user-friendly web experiences.
            I am committed to continuous learning and improving my technical and
            design skills.
          </p>

          <div className="about-skills">
            <div className="skill-card">Frontend Development</div>
            <div className="skill-card">UI / UX Design</div>
            <div className="skill-card">React & JavaScript</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
