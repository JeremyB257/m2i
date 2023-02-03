import React from 'react';
import image from '../../img/image-3.jpeg';
import svgDot from '../../img/dot-pattern.svg';
import {useState} from 'react';

const WhyUs = () => {
  const [orders, setOrders] = useState(94000);
  const [customers, setCustomers] = useState(11000);
  const [chefs, setChefs] = useState(1500);

  const handleRandom = () => {
    setOrders(randomNumber(99999));
    setCustomers(randomNumber(99999));
    setChefs(randomNumber(9999));
  };

  const randomNumber = max => {
    return Math.ceil(Math.random() * max);
  };

  return (
    <section id="whyus" className="whyus">
      <div className="desc">
        <p className="primary-color">Une marque réputée</p>
        <h2>Pourquoi</h2>
        <h2>nous choisir ?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iste nulla, dolore facilis
          perspiciatis soluta tempora odit error. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Id, omnis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Natus, praesentium.
        </p>
        <div className="stats">
          <div className="stat">
            <p>{orders}+</p>
            <p className="primary-color">Commandes</p>
          </div>
          <div className="stat">
            <p>{customers}+</p>
            <p className="primary-color">Clients</p>
          </div>
          <div className="stat">
            <p>{chefs}+</p>
            <p className="primary-color">Chefs</p>
          </div>
        </div>
        <button className="active" onClick={handleRandom}>
          Nombres aléatoires entre 1 et 99999
        </button>
      </div>
      <div className="img">
        <img className="principal" src={image} alt="plats" />
        <img className="dot" src={svgDot} alt="decoration" />
      </div>
    </section>
  );
};

export default WhyUs;
