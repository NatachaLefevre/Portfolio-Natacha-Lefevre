import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/Header.css';

const Header = ({ isModalOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null); // Ref pour le menu dropdown

    // Fonction pour fermer le menu si on clique à l'extérieur
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsMenuOpen(false); // Ferme le menu
        }
    };

    useEffect(() => {
        // Écouter l'événement clic
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Nettoyer l'événement
        };
    }, []);

    const handleScrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Ferme le menu après clic sur un lien
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterne l'affichage du menu
    };

    return (
        <header style={{ display: isModalOpen ? 'none' : 'block' }}>
            <nav>
                <div className="menu-hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
                    <li><a href="#presentation" onClick={(e) => handleScrollToSection(e, 'presentation')}>Présentation</a></li>
                    <li><a href="#portfolio" onClick={(e) => handleScrollToSection(e, 'portfolio')}>Portfolio</a></li>
                    <li><a href="/CV_Natacha_Lefevre.pdf" target="_blank">CV & Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
};

export default Header;