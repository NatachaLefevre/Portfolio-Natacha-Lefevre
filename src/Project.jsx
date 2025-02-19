import React from 'react';

const Project = ({ project, onClick }) => {
  return (
    <li>
      <div className="project-image" onClick={onClick} style={{ position: 'relative', cursor: 'pointer' }}>
        <img 
          src={project.image} 
          alt={project.title} 
        />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Project;