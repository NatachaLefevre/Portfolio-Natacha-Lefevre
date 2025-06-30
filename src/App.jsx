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
          <h1 className='dev'>GRAPHISTE DÉVELOPPEUSE</h1>

          <p className='text-presentation'>Forte d’une expérience de plus de 15 ans, je suis disponible <br />pour tout projet de design et développement web.<br />
            Mon profil polyvalent me permet de comprendre les besoins <br/>de tous les acteurs d’un projet, et d’être à l’aise sur plusieurs disciplines :<br/> print, webdesign, développement fullstack, SEO, UI design...</p>
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