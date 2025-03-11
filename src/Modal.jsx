import React, { useEffect, useState } from 'react';
import './styles/Modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Ouvrir et fermer la modale avec une transition
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } 
    
    else if (visible) {
      setIsAnimating(false);
      setTimeout(() => {
        setVisible(false);
        onClose();
      }, 300);
    }
  }, [isOpen]);

  // Fermer la modale avec la touche Echap
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsAnimating(false);
        setTimeout(() => {
          setVisible(false);
          onClose();
        }, 300);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen]);

  if (!visible) return null;

  // Fermer la modale en cliquant sur l'overlay
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsAnimating(false);
      setTimeout(() => {
        setVisible(false);
        onClose();
      }, 300);
    }
  };

  return (
    <div className={`modal-overlay ${isAnimating ? "show" : ""}`} onClick={handleOverlayClick}>

      <div className={`modal ${isAnimating ? "open" : "closing"}`}>

        <h2>{project.title}</h2>

        <div className="image-description-wrapper">
          <img src={project.image} alt={project.title} />
          <p className="description">{project.modalDescription}</p>
        </div>

        <p className="tools">{project.modalTools}</p>

        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          Voir le projet sur GitHub
        </a>

        <button onClick={handleOverlayClick}>Retour</button>
      </div>
    </div>
  );
};

export default Modal;