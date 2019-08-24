import React from 'react';

const Pet = ({ name, animal, color }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, color)
  ]);
};

export default Pet;
