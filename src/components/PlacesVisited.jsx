import React from 'react';

const PlacesVisited = ({ places }) => {
  return (
    <ul>
      {places.map((place, index) => (
        <li key={index}>{place.name}</li>
      ))}
    </ul>
  );
};

export default PlacesVisited;