import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img className="logo-image" src="/Logo.png" alt="Aluraflix" />
      </div>
      <nav>
        <Link to="/" className="nav-button">HOME</Link>
        <Link to="/new-video" className="nav-button">NUEVO VIDEO</Link>
      </nav>
    </header>
  );
};

export default Header;
