import React from "react";


export default function Skills() {
  const skills = [
    { name: "HTML", level: "Expert", icon: "bi-file-code" },
    { name: "CSS", level: "Expert", icon: "bi-palette" },
    { name: "JavaScript", level: "Advanced", icon: "bi-lightning" },
    { name: "React.js", level: "Advanced", icon: "bi-code-slash" },
    { name: "Bootstrap", level: "Advanced", icon: "bi-layout-text-sidebar" },
    { name: "Sass", level: "Advanced", icon: "bi-brush" },
    { name: "Context API", level: "Intermediate", icon: "bi-gear" },
    { name: "API Integration", level: "Advanced", icon: "bi-cloud-arrow-down" },
    { name: "tailwindcss", level: "Intermediate", icon: "bi-palette" },
    { name: "Flowbite", level: "Intermediate", icon: "bi-layout-text-sidebar" },
    { name: "Redux", level: "Intermediate", icon: "bi-gear" },
    { name: "TypeScripte", level: "Intermediate", icon: "bi-code-slash" },
    
  ];

  return (
    <section className="skills py-5" id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-5">My Skills</h2>
        <div className="row gy-4">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="skill-card p-3 shadow-sm">
                <i className={`bi ${skill.icon} skill-icon mb-3`}></i>
                <h5 className="skill-name">{skill.name}</h5>
                <p className="skill-level">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
