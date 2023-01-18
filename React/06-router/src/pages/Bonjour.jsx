import React from 'react';
import { useParams } from 'react-router-dom';

const Bonjour = () => {
  const params = useParams();

  return (
    <div>
      <h1>bonjour {params.name}</h1>
    </div>
  );
};

export default Bonjour;
