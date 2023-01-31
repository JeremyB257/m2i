import React from 'react';
import image1 from '../img/shop.svg';
import image2 from '../img/chef.svg';
import image3 from '../img/celebration.svg';

const Service = () => {
  return (
    <section id="service" className="service">
      <h2>
        Incroyable <span>prestation.</span>
      </h2>
      <div className="cards">
        <div className="card">
          <img src={image1} alt="boutique" />
          <h3>230+ restaurants</h3>
          <p>Lorem ipsum donor amet siti ceali placeholder text</p>
          <a href="#service">
            En savoir plus
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={image2} alt="chef" />
          <h3>Chefs professionnels</h3>
          <p>Lorem ipsum donor amet siti ceali placeholder text</p>
          <a href="#service">
            En savoir plus
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={image3} alt="traiteur" />
          <h3>Traiteur anniversaire</h3>
          <p>Lorem ipsum donor amet siti ceali placeholder text</p>
          <a href="#service">
            En savoir plus
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
