import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import Project from './Project';
import Footer from './Footer';
import './styles/App.css';
import './styles/Project.css';
import photo from '/public/images/photo_CV.svg'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: 'Booki',
      description: "Page d'accueil d'une agence de voyages",
      modalDescription: "Développement de la page d'accueil, et du responsive desktop, tablette et mobile.",
      modalTools: "HTML et CSS",
      image: '/images/booki01.svg',
    },

    {
      title: 'Architecte Sophie Bluel',
      description: "Portfolio d'une architecte",
      modalDescription: "Développement d'un site dynamique, avec gestion des données et des connexions utilisateur via une API.",
      modalTools: "Javascript, Node.js, API REST, HTML et CSS",
      image: '/images/bluel01.svg',
    },

    {
      title: 'Kasa Immo',
      description: "Appli d'une agence immobilière",
      modalDescription: "Développement front-end du site, création de modales et de carrousels.",
      modalTools: "React, React Router, SCSS, Javascript et HTML",
      image: '/images/kasa03.svg',
    },

    {
      title: 'Mon Vieux Grimoire',
      description: "Appli de notation de livres",
      modalDescription: "Création d'API, mise en place d'un système d'authentification, création de la notation et du classement des livres.",
      modalTools: "MongoDB, Express.js, Node.js, API REST",
      image: '/images/grimoire01.svg',
    },
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
      <Header isModalOpen={isModalOpen} />

      <section id="presentation">

        <img src={photo} alt="photo de Natacha Lefèvre" className="presentation-image" />

        <div className='title-presentation'>

          <h1 className='name'>Natacha Lefèvre</h1>
          <h1 className='dev'>DÉVELOPPEUSE WEB</h1>

          <p className='text-presentation'>Graphiste multimédia en reconversion vers le développement web.<br />
            Très enthousiaste à l’idée de commencer une nouvelle aventure professionnelle, je poursuis la formation Développeuse Web,
            chez OpenClassrooms.<br />
            Je suis disponible pour toute collaboration, en front-end et en back-end.</p>
        </div>
      </section>

      <section id="portfolio">
        
          <h2>MES PROJETS</h2>
          
          <div className="project-container">
            {projects.map((project, index) => (
              <Project
                key={index}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} project={currentProject} />

      <Footer />
    </>


  );
};

export default App;