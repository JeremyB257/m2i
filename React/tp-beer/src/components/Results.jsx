import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  return (
    <div className="results">
      {props.data?.map((beer) => (
        <Link
          to={`/biere/${beer.id}/${beer.name.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}
          key={beer.id}>
          <div className="card">
            <p>{beer.name}</p>
            <img src={beer.image_url} alt={beer.name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Results;
