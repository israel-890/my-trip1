import React from 'react';

const PlaceList = ({ places }) => {
  return (
    <div className="h-full">
      <h2 className="text-3xl font-bold mb-4 text-center bg-blue-700 rounded-none text-white py-2">הרשימה שלי</h2>
      <ul className="text-xl text-center space-y-3 px-2 mx-5">
        {places.map((place, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg ${
              index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {place.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceList;