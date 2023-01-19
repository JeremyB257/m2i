import React from 'react';

const Loader = (props) => {
  return (
    <div className="loader-page">
      <div className="loader"></div>
      <p>🍻{props.name}</p>
    </div>
  );
};

export default Loader;
