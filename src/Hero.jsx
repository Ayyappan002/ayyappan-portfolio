import "./global.css";
import profile from "./assets/profile.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left" data-aos="fade-right">

        <p className="intro">Hello, I'm</p>

        <h1 className="hero-name">Ayyappan</h1>

        <h3 className="hero-role">
          Frontend Developer 
        </h3>

        <p className="desc">
          Crafting beautiful, intuitive, and user-centered digital experiences.
          Passionate about creating pixel-perfect designs and bringing them to
          life with clean, efficient code.
        </p>

        {/* BUTTONS */}
        <div className="btns">
          <a href="#projects" className="btn">
            View Projects →
          </a>

          <a href="/Ayyappan_resume.pdf"  download className="btn outline">
            ⬇ Download CV
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="socials">
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/">
            <FaGithub />
          </a>
          <a href="mailto:ayyappanm216@gmail.com">
            <HiOutlineMail />
          </a>
        </div>

      </div>


      {/* RIGHT IMAGE — NOT MODIFIED */}
      <div className="hero-right" data-aos="zoom-in">
        <div className="img-wrapper">
          <img src={profile} alt="Ayyappan's Profile" />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;