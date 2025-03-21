import React, { useState } from 'react';
import computerGif from '../assets/computer.gif';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar fixed w-full z-50 transition-shadow duration-300">
            <div className="logo"> 
                <img src={computerGif} alt="" className='logo-img'/>
                Ulises Desentis Portfolio
                </div>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#about"><img src="../assets/Imagen1.png" alt="" />Sobre mí</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;