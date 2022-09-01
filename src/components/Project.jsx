import React from "react";

export const Project = ({ img, title, text }) => {
  return(
    <div className="body-preview">
        <img 
          src={require(`../assets/images/project-${img}.webp`)} 
          alt={`Project ${img}`} 
          />
        <div className="preview-text">
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#responsive</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="preview-buttons">
            <button className="button-demo">Demo</button>
            <button>Code</button>
          </div>
        </div>
    </div>
  );
}