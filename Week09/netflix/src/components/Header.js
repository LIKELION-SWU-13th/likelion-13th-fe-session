import React from 'react';
import logo from '../assets/Netflix_Logo_CMYK.png';

function Header() {
  return (
    <header style={{ padding: '20px' }}>
      <img src={logo} alt="Netflix" style={{ height: '40px' }} />
    </header>
  );
}

export default Header;
