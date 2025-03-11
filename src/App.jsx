import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import Project from './Project';
import Footer from './Footer';
import './styles/App.css';
import './styles/Project.css';
import projects from '../data/projects.json';
import photo from '/public/images/photo_CV.webp'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

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
            Très enthousiaste à l’idée de commencer une nouvelle aventure professionnelle, je suis disponible pour toute collaboration.<br />
            Je présente un profil polyvalent : HTML, CSS, React, Javascript, Node.js, MongoDb, UI design...</p>
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