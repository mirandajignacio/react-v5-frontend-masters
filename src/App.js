import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams></SearchParams>
      {/* <Pet name="Croket" animal="Dog" color="Black & white"></Pet>
      <Pet name="Lila" animal="Dog" color="Blond"></Pet>
      <Pet name="Romeo" animal="Dog" color="Blond"></Pet> */}
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
