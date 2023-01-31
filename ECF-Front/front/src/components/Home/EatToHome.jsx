import React from 'react';
import image from '../../img/image-1.jpeg';
import svgDot from '../../img/dot-pattern.svg';
import { useState } from 'react';

const EatToHome = () => {
  const [order, setOrder] = useState(false);
  const [meet, setMeet] = useState(false);

  const handleOrder = () => {
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
    }, 2000);
  };

  const handleMeet = () => {
    setMeet(!meet);
  };

  return (
    <section id="eatToHome" className="eatToHome">
      <p className={order ? 'order success' : 'hidden'}>Votre commande a été prise en compte</p>
      <div className={order ? 'hidden' : 'desc'}>
        <h2>Délicieux & abordable</h2>
        <h2>Repas chez vous.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iste nulla, dolore facilis perspiciatis soluta
          tempora odit error.
        </p>
        <div className="button">
          <button className="active" onClick={handleOrder}>
            Commander maintenant
          </button>
          <button onClick={handleMeet}>
            <i className="fa-regular fa-circle-play"></i> Rencontrer les chefs
          </button>
        </div>
      </div>
      <div className={order ? 'hidden' : 'img'}>
        <img className={meet ? 'hidden' : 'principal'} src={image} alt="plats" />
        <iframe
          className={meet ? '' : 'hidden'}
          width="460"
          height="306"
          src="https://www.youtube.com/embed/_GuOjXYl5ew"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        <img className="dot" src={svgDot} alt="decoration" />
      </div>
    </section>
  );
};

export default EatToHome;
