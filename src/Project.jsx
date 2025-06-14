import PropTypes from 'prop-types';
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

Project.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default Project;