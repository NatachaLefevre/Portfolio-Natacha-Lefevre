import React, { useState } from 'react';
import Modal from './Modal';
import Project from './Project'; // Si vous avez un composant Project
import './styles/App.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: 'Projet 1',
      description: 'Description de votre projet 1.',
      image: '/images/image1.png', // Assurez-vous que ce soit un PNG
    },
    {
      title: 'Projet 2',
      description: 'Description de votre projet 2.',
      image: '/images/image2.png',
    },
    // Ajoutez d'autres projets ici
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <>
      <h1>NATACHA LEFÈVRE - DÉVELOPPEUSE WEB</h1>
      <p className='presentation'>En reconversion du graphisme au développement web, je suis disponible pour toute collaboration en front-end et back-end.</p>
      <div className="projects">
        <h2>MES PROJETS</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project 
              key={index} 
              project={project} 
              onClick={() => openModal(project)} 
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} project={currentProject} />
    </>
  );
};

export default App;