import { useState } from 'react';
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
          <h1 className='dev'>GRAPHISTE 360°</h1>

          <p className='text-presentation'>Je vous accompagne pour tout projet de création visuelle.<br />
            Grâce à ma polyvalence, je peux créer votre identité visuelle<br />
            (logo, charte graphique), et la décliner sur tous supports :<br />
            affiches, flyers, cartes de visite, BD, vidéos, photos, sites web, applis... <br />
            J&apos;interviens également en développement et référencement web.</p>
        </div>
      </section>

      <section id="contact">

        <h2>CONTACT</h2>
      
        <div className='contact-container'>
          <h3>06 95 50 28 50</h3>
          <h3>lefevre.natacha60@gmail.com</h3>
        </div>

        <button className='button-CV'><a href="/CV_Natacha_Lefevre.pdf" target="_blank">Formations et expériences</a></button>

      </section>

      <section id="portfolio">

        <h2>MES RÉALISATIONS</h2>

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