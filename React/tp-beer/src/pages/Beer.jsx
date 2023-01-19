import React from 'react';
import { useParams } from 'react-router-dom';

const Beer = () => {
  let params = useParams();

  return (
    <div>
      <h1>Beer</h1>
      {params.id}
    </div>
  );
};

export default Beer;
