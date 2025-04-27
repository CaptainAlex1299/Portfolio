import React from "react";
import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGithub } from "react-icons/fa";
import './SkillsSection.css'; // Make sure this file exists

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "PHP", icon: FaPhp, color: "#8892BE" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map(({ name, icon: Icon, color }) => (
          <div key={name} className="skill-card">
            <Icon size={40} color={color} />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
