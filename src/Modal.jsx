import React from 'react';
import './styles/Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Ferme la modale si l'utilisateur clique sur l'overlay
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>

      <div className="modal">

        <h2>{project.title}</h2>

        <div className="image-description-wrapper">
        <img src={project.image} alt={project.title}/>
        <p className='description'>{project.modalDescription}</p>
        </div>

        <p className='tools'>{project.modalTools}</p>

        <a href={project.githubUrl} target="_blank">
          Voir le projet sur GitHub
        </a>

        <button onClick={onClose}>Retour</button>

      </div>
    </div>
  );
};

export default Modal;