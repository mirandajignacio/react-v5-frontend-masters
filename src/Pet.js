import React from 'react';

const Pet = ({ name, animal, color }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{color}</h2>
    </div>
  );
};

export default Pet;
