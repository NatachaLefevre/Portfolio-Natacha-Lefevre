import React from 'react';
import './styles/Project.css';
import './styles/App.css';

const Project = ({ project, onClick }) => {
  return (
    <li>
      <div className="project-image" onClick={onClick}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="image" 
        />
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Project;