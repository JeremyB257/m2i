import React from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const elem = ref.current;
    if (window.innerWidth > 1000) {
      elem.classList.remove('hidden');
    }
    window.addEventListener('resize', () => handleWindowResize(elem));
  }, []);

  function handleWindowResize(elem) {
    if (window.innerWidth > 1000) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  }

  const toggleBurger = e => {
    setBurgerOpen(!burgerOpen);
    let span = e.currentTarget.children;

    span[0].classList.toggle('rotateOne');
    span[1].classList.toggle('opacityTwo');
    span[2].classList.toggle('rotateThree');
  };

  return (
    <header id="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <Link to="/">
          <h1>Thaito</h1>
        </Link>
      </div>
      <nav id="nav" className={burgerOpen ? 'show' : 'hidden'} ref={ref}>
        <ul>
          <li>
            <Link to="/menu">A propos</Link>
          </li>
          <li>
            <Link to="/menu">Blog</Link>
          </li>
          <li>
            <Link to="/menu">Prix</Link>
          </li>
          <li>
            <Link to="/menu">Nous contacter</Link>
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
      <div className="burger-menu" onClick={e => toggleBurger(e)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
