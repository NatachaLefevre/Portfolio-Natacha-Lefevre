import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import Project from './Project';
import Footer from './Footer';
import './styles/App.css';
import './styles/Project.css';
import photo from '/public/images/photo_CV.jpg'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: 'Booki',
      description: "Page d'accueil d'une agence de voyage",
      modalDescription: "À partir de la maquette Figma, j'ai assuré le développement front-end de la page d'accueil.",
      modalTools: "HTML et CSS",
      image: '/images/image1.png',
    },

    {
      title: 'Architecte Sophie Bluel',
      description: "Portfolio d'une architecte",
      modalDescription: "À partir de la maquette Figma, j'ai assuré le développement front-end de la page d'accueil.",
      modalTools: "HTML et CSS",
      image: '/images/image2.png',
    },

    {
      title: 'Kasa Immo',
      description: "Appli d'une agence immobilière",
      modalDescription: "À partir de la maquette Figma, j'ai assuré le développement front-end de la page d'accueil.",
      modalTools: "HTML et CSS",
      image: '/images/image1.png',
    },

    {
      title: 'Mon Vieux Grimoire',
      description: "Gestion back-end d'une appli de notation de livres",
      modalDescription: "À partir de la maquette Figma, j'ai assuré le développement front-end de la page d'accueil.",
      modalTools: "HTML et CSS",
      image: '/images/image2.png',
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
      <Header />

      <section id="presentation">

        <img src={photo} alt="photo de Natacha Lefèvre" className="presentation-image" />

        <div className='title-presentation'>

          <h1>Natacha Lefèvre <br /> DÉVELOPPEUSE WEB</h1>

          <p className='text-presentation'>Graphiste multimédia en reconversion vers le développement web.<br />
            Très enthousiaste à l’idée de commencer une nouvelle aventure professionnelle, <br />je suis la formation « Développeuse Web »,
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