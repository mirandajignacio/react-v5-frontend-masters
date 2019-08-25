import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
  console.log({ pets });
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.type}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
