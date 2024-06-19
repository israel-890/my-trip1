// components/PlaceList.js
import React from 'react';

const PlaceList = ({ places }) => {
  return (
    <div className='h-full'>
      <h2 className="text-2xl font-bold mb-4 text-center bg-blue-700">הרשימה שלי</h2>
    <ul className="text-center ">
      {places.map((place, index) => (
        <li key={index}>{place.name}</li>
      ))}
    </ul>
  </div>
  );
};

export default PlaceList;