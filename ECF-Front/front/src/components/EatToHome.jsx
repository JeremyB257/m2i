import React from 'react';
import image from '../img/image-1.jpeg';
import svgDot from '../img/dot-pattern.svg';

const EatToHome = () => {
  return (
    <section className="eatToHome">
      <div className="desc">
        <h2>Délicieux & abordable</h2>
        <h2>Repas chez vous.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iste nulla, dolore facilis perspiciatis soluta
          tempora odit error.
        </p>
        <div className="button">
          <a href="#" className="active">
            Commander maintenant
          </a>
          <a href="#">
            <i className="fa-regular fa-circle-play"></i> Rencontrer les chefs
          </a>
        </div>
      </div>
      <div className="img">
        <img className="principal" src={image} alt="plats" />
        <img className="dot" src={svgDot} alt="decoration" />
      </div>
    </section>
  );
};

export default EatToHome;
