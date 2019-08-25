import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [AnimalDropdown, animal] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [BreedDropdown, breed, setBreed] = useDropdown('Breed', '', breeds);

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
      <form>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
