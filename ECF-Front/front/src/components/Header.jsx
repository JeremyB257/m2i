import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Thaito</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">A propos</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Prix</a>
          </li>
          <li>
            <a href="#">Nous contacter</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Connexion</a>
          </li>
          <li className="active">
            <a href="#">Inscription</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
