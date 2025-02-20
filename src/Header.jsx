import React from 'react';
import './styles/Header.css';

const Header = ({ isModalOpen }) => {
  const handleScrollToSection = (sectionId) => {
    event.preventDefault(); // Pour éviter le comportement de lien normal
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide
  };

  return (
    <header style={{ display: isModalOpen ? 'none' : 'block' }}>
      <nav>
        <ul className="nav-links">
          <li><a href="#presentation" onClick={() => handleScrollToSection('presentation')}>Présentation</a></li>
          <li><a href="#portfolio" onClick={() => handleScrollToSection('portfolio')}>Portfolio</a></li>
          <li><a href="/CV_Natacha_LEFEVRE.pdf" download>CV</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;