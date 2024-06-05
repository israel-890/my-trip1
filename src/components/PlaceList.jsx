// components/PlaceList.js
import React from 'react';

const PlaceList = ({ places }) => {
  return (
    <ul>
      {places.map((place, index) => (
        <li key={index}>{place.name}</li>
      ))}
    </ul>
  );
};

export default PlaceList;