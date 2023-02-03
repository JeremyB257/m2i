import React from 'react';
import logo from '../img/logo.svg';
import ytbIcon from '../img/youtube-icon.svg';
import twitterIcon from '../img/twitter-icon.svg';
import fcbIcon from '../img/facebook-icon.svg';
import {useState} from 'react';

const Footer = () => {
  const [email, setEmail] = useState();
  const [sendEmail, setSendEmail] = useState(false);

  const handleSubscrib = () => {
    if (email) {
      setSendEmail(true);
      setTimeout(() => {
        setSendEmail(false);
      }, 2000);
    } else {
      console.log("pas d'email");
    }
  };

  return (
    <footer>
      <div className="footer footer-top">
        <ul data-header="PRINCIPAL">
          <li>Blog</li>
          <li>FAQs</li>
          <li>Support</li>
          <li>A propos de nous</li>
        </ul>
        <ul data-header="PRODUIT">
          <li>Se connecter</li>
          <li>Personnel</li>
          <li>Entreprise</li>
          <li>Equipe</li>
        </ul>
        <ul data-header="PRESSE">
          <li>Logos</li>
          <li>Evénements</li>
          <li>Histoires</li>
          <li>Bureau</li>
        </ul>
        <ul data-header="LEGAL">
          <li>RGPD</li>
          <li>Politique de confidentialité</li>
          <li>Conditions d'utilisations</li>
          <li>Avis de non-responsabilité</li>
        </ul>
        <div className="newsletter">
          <h4>S'INSCRIRE A NOTRE NEWSLETTER</h4>
          <p>Nous vous enverrons de bonnes choses à manger sans spam.</p>
          <p className={sendEmail ? 'success' : 'hidden'}>Merci {email}</p>
          <input
            className={sendEmail ? 'hidden' : ''}
            type="email"
            placeholder="Votre adresse email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={sendEmail ? 'hidden' : ''}
            type="button"
            value="S'inscrire"
            onClick={handleSubscrib}
          />
        </div>
      </div>

      <div className="footer footer-bottom">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Thaito Inc.</h1>
        </div>
        <p>© 2022 Thaito Inc. Tous droits réservés.</p>
        <div className="social-logo">
          <a href="#header">
            <img src={fcbIcon} alt="icon Facebook" />
          </a>
          <a href="#header">
            <img src={twitterIcon} alt="icon Twitter" />
          </a>
          <a href="#header">
            <img src={ytbIcon} alt="icon Youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
