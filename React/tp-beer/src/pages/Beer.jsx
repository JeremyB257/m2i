import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

const Beer = () => {
  let params = useParams();
  const { data, loading, error } = useFetch(`https://api.punkapi.com/v2/beers/${params.id}`);

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
          <div className="bottom-part">
            <div className="left-part">
              <p>
                Alc. <strong>{data[0]?.ph}%</strong>
              </p>
              <h3>Food Pairing</h3>
              <ul>
                {data[0]?.food_pairing.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
              <div className="ibu">
                <p>
                  <strong>Ibu {data[0]?.ibu}</strong>
                </p>
                {data[0]?.ibu > 0 ? (
                  <i className="fa-solid fa-circle"></i>
                ) : (
                  <i className="fa-solid fa-circle grey"></i>
                )}
                {data[0]?.ibu > 20 ? (
                  <i className="fa-solid fa-circle"></i>
                ) : (
                  <i className="fa-solid fa-circle grey"></i>
                )}
                {data[0]?.ibu > 40 ? (
                  <i className="fa-solid fa-circle"></i>
                ) : (
                  <i className="fa-solid fa-circle grey"></i>
                )}
                {data[0]?.ibu > 60 ? (
                  <i className="fa-solid fa-circle"></i>
                ) : (
                  <i className="fa-solid fa-circle grey"></i>
                )}
                {data[0]?.ibu > 80 ? (
                  <i className="fa-solid fa-circle"></i>
                ) : (
                  <i className="fa-solid fa-circle grey"></i>
                )}
              </div>
            </div>
            <div className="right-part">
              <img src={`../../img/glass-${Math.ceil(data[0]?.ebc / 10)}.jpg`} alt="Verre recommandé" />
              <p>
                EBC {data[0]?.ebc} (Glass {Math.ceil(data[0]?.ebc / 10)})
              </p>
            </div>
          </div>
          <input type="button" value="COMMANDER" />
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
