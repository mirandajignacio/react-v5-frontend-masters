const Pet = ({ name, animal, color }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, color)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById('root'));
