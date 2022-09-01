import React from "react";
import '../stylesheets/skill.scss';

export function Skill({ nameSkill, progress }) {
  return (
    <div className="skills-details">
      <label htmlFor={nameSkill}>{nameSkill}</label>
      <progress id={nameSkill} max='100' value={progress}></progress>            
    </div>
  );
}