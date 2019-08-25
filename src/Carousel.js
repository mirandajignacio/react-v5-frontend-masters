/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const Carousel = ({ media }) => {
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (media.length) {
      setPhotos(media.map(({ large }) => large));
    } else {
      setPhotos(['http://placecorgi.com/600/600']);
    }
  }, [media]);

  const handleIndexClick = event => {
    setActive(+event.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {photos.map((photo, index) => {
          return (
            <img
              key={photo}
              onClick={handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal-thumbail"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
