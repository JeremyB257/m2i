import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Thaito</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#header">A propos</a>
          </li>
          <li>
            <a href="#header">Blog</a>
          </li>
          <li>
            <a href="#header">Prix</a>
          </li>
          <li>
            <a href="#header">Nous contacter</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#header">Connexion</a>
          </li>
          <li className="active">
            <a href="#header">Inscription</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
