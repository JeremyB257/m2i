import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import Card from '../components/Menu/Card';

const Menu = () => {
  const [meals, setMeals] = useState();
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState({message: '', img: ''});

  useEffect(() => {
    axios
      .get('http://localhost:3000/meals')
      .then(res => {
        let filtered = filter ? res.data.filter(meal => meal.type === filter) : res.data;
        setMeals(filtered);
        setOrder('');
      })
      .catch(err => console.log(err));
  }, [filter]);

  const handleClickCard = meal => {
    setOrder({message: `Vous avez commandé le repas ${meal.title}`, img: meal.imageSrc});
    setTimeout(() => {
      setOrder({message: '', img: ''});
    }, 2000);
  };

  return (
    <main className="menu">
      <div className="top">
        <h1>
          Decouvrez notre <span>menu.</span>
        </h1>
        <div className="filter">
          <ul>
            <li className={filter === '' ? 'active' : ''} onClick={() => setFilter('')}>
              Tout
            </li>
            <li className={filter === 'meat' ? 'active' : ''} onClick={() => setFilter('meat')}>
              Viandes
            </li>
            <li className={filter === 'flower' ? 'active' : ''} onClick={() => setFilter('flower')}>
              Legumes
            </li>
          </ul>
        </div>
      </div>
      {order.message ? (
        <div className="order">
          <p className="success">{order.message}</p>
          <img src={order.img} alt="plat" />
        </div>
      ) : (
        <div className="cards">
          {meals?.map((meal, index) => (
            <Card key={index} meal={meal} onclick={() => handleClickCard(meal)} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Menu;
