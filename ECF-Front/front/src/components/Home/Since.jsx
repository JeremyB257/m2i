import React, {useState} from 'react';
import image from '../../img/image-2.jpeg';
import svgDot from '../../img/dot-pattern.svg';

const Since = () => {
  const [year, setYear] = useState(5);

  return (
    <section id="since" className="since">
      <div className="img">
        <img className="principal" src={image} alt="plats" />
        <img className="dot" src={svgDot} alt="decoration" />
      </div>
      <div className="desc">
        <p className="primary-color">Installé depuis 2014</p>
        <h2>Nous vous servons</h2>
        <h2>depuis {year} ans.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint iste nulla, dolore facilis
          perspiciatis soluta tempora odit error.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, deserunt!</p>

        <button className="active" onClick={() => setYear(year + 1)}>
          Ajouter 1 an
        </button>
      </div>
    </section>
  );
};

export default Since;
