import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

const Beer = () => {
  let params = useParams();
  const { data, loading, error } = useFetch(`https://api.punkapi.com/v2/beers/${params.id}`);
  console.log(data);
  return (
    <>
      {loading ? (
        <Loader name="La bière arrive !" />
      ) : (
        <div className="beer-card">
          <div className="description">
            <img src={data[0]?.image_url} alt={data[0]?.name} />
            <div className="description-text">
              <h2>{data[0]?.name}</h2>
              <p>{data[0]?.description}</p>
            </div>
          </div>
          <p>
            Alc. <strong>{data[0]?.ph}%</strong>
          </p>
          <h3>Food Pairing</h3>
          <ul>
            {data[0]?.food_pairing.map((food) => (
              <li>{food}</li>
            ))}
          </ul>
        </div>
      )}
      {error && (
        <div className="loader-page">
          <p>Une erreur est survenue, veuillez réessayer plus tard !</p>
        </div>
      )}
    </>
  );
};

export default Beer;
