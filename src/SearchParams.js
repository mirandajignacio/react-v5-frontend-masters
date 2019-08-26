import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log(useContext(ThemeContext));
  const [location, setLocation] = useState('Seattle, WA');
  const [AnimalDropdown, animal] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [BreedDropdown, breed, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal, setBreed]);

  const handleChange = event => setLocation(event.target.value);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location{' '}
          <input
            id="location"
            value={location}
            placeholder="Locaion"
            onChange={handleChange}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">peru</option>
            <option value="red">red</option>
            <option value="darkblue">darkblue</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
