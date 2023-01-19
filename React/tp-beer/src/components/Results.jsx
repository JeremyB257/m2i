import React from 'react';

const Results = (props) => {
  console.log(props.data);
  return (
    <div className="results">
      {props.data.map((beer) => (
        <div className="card">
          <p>{beer.name}</p>
          <img src={beer.image_url} alt={beer.name} />
        </div>
      ))}
    </div>
  );
};

export default Results;
