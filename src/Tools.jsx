import "./tools.css";
import {
//   SiVisualStudioCode,
  SiGithub,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,

} from "react-icons/si";

const Tools = () => {
  const toolsList = [
    // { name: "VS Code", icon: <SiVisualStudioCode /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  return (
    <section className="toolsList">
      <h2>Tools I Use</h2>

      <div className="toolList-container">
        {toolsList.map((tool, index) => (
          <div key={index} className="toolList-box">
            <div className="toolList-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;