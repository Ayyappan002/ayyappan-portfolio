import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava
} from "react-icons/fa";

import {
  SiJavascript,
  SiFlutter,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiCanva,
  SiPostman
} from "react-icons/si";

import "./global.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt />, level: 88 },
      { name: "JavaScript", icon: <SiJavascript />, level: 85 },
      { name: "React JS", icon: <FaReact />, level: 82 }
    ]
  },

  {
    title: "Backend",
    skills: [
      { name: "Core Java", icon: <FaJava />, level: 70 },
      { name: "Node JS", icon: <SiNodedotjs />, level: 72 },
      { name: "Express JS", icon: <SiExpress />, level: 70 },
      { name: "Python (Basics)", icon: <FaPython />, level: 50 }
    ]
  },

  {
    title: "Designing",
    skills: [
      { name: "Figma (Basics)", icon: <SiFigma />, level: 55 },
      { name: "Flutter", icon: <SiFlutter />, level: 60 },
      { name: "Canva", icon: <SiCanva />, level: 78 }
    ]
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 70 }
    ]
  },

  // {
  //   title: "API",
  //   skills: [
  //     { name: "REST API", icon: <SiPostman />, level: 72 },
  //     { name: "Thunder Client", icon: <SiPostman />, level: 68 }
  //   ]
  // }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title" data-aos="fade-up">
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="skills-line"></div>
      </div>

      {skillGroups.map((group, gIndex) => (
        <div className="skills-group" key={gIndex}>
          <h3
            className="skills-group-title"
            data-aos="fade-right"
          >
            {group.title}
          </h3>

          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <div
                className="skill-bar-card"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <div className="skill-bar-header">
                  <div className="skill-left">
                    <span className="skill-icon">
                      {skill.icon}
                    </span>
                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </div>

                  <span className="skill-percent">
                    {skill.level}%
                  </span>
                </div>

                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;