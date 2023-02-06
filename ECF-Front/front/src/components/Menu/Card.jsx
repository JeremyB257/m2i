import React from 'react';

const Card = ({meal, onclick}) => {
  return (
    <div className="card">
      <div className="image">
        <img src={meal.imageSrc} alt="plat" />
        <button onClick={onclick}>Commander</button>
      </div>
      <div className="desc">
        <h4>{meal.title}</h4>
        <p>{meal.content}</p>
        <h5>{meal.price}</h5>
        <span>
          <i className="fa-solid fa-star"></i>
          {meal.rating} ({meal.reviews})
        </span>
      </div>
    </div>
  );
};

export default Card;
