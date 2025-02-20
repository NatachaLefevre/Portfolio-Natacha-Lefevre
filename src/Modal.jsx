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
        <img src={project.image} alt={project.title} />
        <p className='description'>{project.modalDescription}</p>
        <p className='tools'>{project.modalTools}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;