import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Croket',
      animal: 'Dog',
      color: 'Black & white'
    }),
    React.createElement(Pet, {
      name: 'Lila',
      animal: 'Dog',
      color: 'Blond'
    }),
    React.createElement(Pet, {
      name: 'Romeo',
      animal: 'Dog',
      color: 'Blond'
    })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
