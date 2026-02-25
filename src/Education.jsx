import "./global.css";

const Education = () => {
  return (
    <section className="education-section" id="education" data-aos="fade-up">
      <div className="education-title">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-line"></div>
      </div>

      <div className="education-wrapper">
        <div className="education-card">
          <div className="edu-icon">
            🎓
          </div>

          <div className="edu-content">
            <h3>B.Tech – Artificial Intelligence & Data Science</h3>
            <h4>Muthayammal Engineering College</h4>

            <p>
              Focused on Artificial Intelligence, Data Science, and modern web
              technologies with hands-on project experience.
            </p>

            <div className="edu-footer">
              <span className="edu-cgpa">CGPA : 7.5 / 10</span>
              <span className="edu-year">2020 – 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;