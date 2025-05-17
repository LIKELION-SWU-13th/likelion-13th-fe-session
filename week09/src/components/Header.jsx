import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/home" className="logo">
        <img className="logoImage" src={logoImage} alt="Netflix Logo" />
      </Link>
      
      
    </header>
  );
}

export default Header;
