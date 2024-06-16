import React, { useState } from 'react';

const TripModal = ({ places, onSelectPlace, onClose }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlaces = places.filter((place) => {
    if (filter === 'all') return true;
    if (filter === 'couple') return place.type === 'couple';
    if (filter === 'family') return place.type === 'family';
    return place.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-4/5 h-4/5 flex">
        <div className="w-1/4 p-4">
          <input
            type="text"
            placeholder="חפש מקום..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-full"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-full"
          >
            <option value="all">הכל</option>
            <option value="couple">טיול זוגי</option>
            <option value="family">טיול משפחתי</option>
          </select>
          <button
            onClick={() => {
              onClose();
              // Add logic to navigate to the AI suggestion component
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 flex items-center"
          >
            <span className="mr-2">עבור לטיילן שלי להוספת מקום אוטומטית</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 100 14 7 7 0 000-14zm-1.2 8.2a.8.8 0 011.4.6v1.6a.8.8 0 01-.8.8H8.8a.8.8 0 01-.8-.8V12a.8.8 0 01.8-.8h.8zm1.6-4.8a.8.8 0 00-.8-.8H8.8a.8.8 0 00-.8.8v.8a.8.8 0 00.8.8h.8a.8.8 0 00.8-.8V6.4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="w-3/4 p-4 overflow-y-auto">
          <ul>
            {filteredPlaces.map((place) => (
              <li
                key={place.id}
                onClick={() => onSelectPlace(place)}
                className="bg-gray-200 p-2 mb-2 rounded cursor-pointer"
              >
                {place.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripModal;