import React from 'react';
import './styles/Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;