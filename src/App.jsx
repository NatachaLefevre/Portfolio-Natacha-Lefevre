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
      modalDescription: "Développement de la page d'accueil de l'agence Booki, à partir d'une maquette Figma. La problématique était principalement de respecter la maquette, et d'assurer le responsive desktop, tablette et mobile.",
      modalTools: "HTML et CSS",
      image: '/images/booki01.svg',
      githubUrl: 'https://github.com/NatachaLefevre/Booki-site-d-agence-de-voyages',
    },

    {
      title: 'Architecte Sophie Bluel',
      description: "Portfolio d'une architecte",
      modalDescription: "Développement d'un site dynamique, avec gestion des données et des connexions utilisateur via une API. Il était important d'assurer la sécurité des identifiants de la cliente, et de lui permettre de classer efficacement ses projets.",
      modalTools: "Javascript, Node.js, API REST, HTML et CSS",
      image: '/images/bluel01.svg',
      githubUrl: 'https://github.com/NatachaLefevre/Portfolio-architecte-sophie-bluel',
    },

    {
      title: 'Kasa Immo',
      description: "Appli d'une agence immobilière",
      modalDescription: "Développement front-end du site, avec création de menus déroulants, de carrousels d'images et de modales. L'une des problématiques était de simplifier le code au mieux afin d'éviter les redondances. Le tout en respectant le responsive design.",
      modalTools: "React, React Router, SCSS, Javascript et HTML",
      image: '/images/kasa03.svg',
      githubUrl: 'https://github.com/NatachaLefevre/kasa-immo-appli',
    },

    {
      title: 'Mon Vieux Grimoire',
      description: "Appli de notation de livres",
      modalDescription: "Création d'une API, afin de permettre aux utilisateurs de noter des livres, de s'inscrire et d'ajouter des livres de leur choix. Mon travail sur ce site a été exclusivement back-end, avec notamment la mise en place d'un système d'authentification sécurisé.",
      modalTools: "MongoDB, Express.js, Node.js, API REST",
      image: '/images/grimoire01.svg',
      githubUrl: 'https://github.com/NatachaLefevre/Appli-back-end-Mon-Vieux-Grimoire',
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
            Très enthousiaste à l’idée de commencer une nouvelle aventure professionnelle, je suis disponible pour tout collaboration.<br />
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