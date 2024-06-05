// HomePage.js
import React, { useState } from 'react';
import Map from '../components/Map';
import PlaceList from '../components/PlaceList';
import AddPlaceModal from '../components/AddPlaceModal';

const HomePage = () => {
  const [places, setPlaces] = useState([]);
  const [showAddPlaceModal, setShowAddPlaceModal] = useState(false);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const toggleAddPlaceModal = () => {
    setShowAddPlaceModal(!showAddPlaceModal);
  };

  return (
    <div className="relative flex max-h-72 p-4">
      <div className="w-4/5 h-full flex">
        <div className="relative w-1/2 h-full">
          <Map places={places} />
        </div>
        <div className="relative w-1/2 h-full">
          <PlaceList places={places} />
        </div>
      </div>
      <div className="w-1/5 h-full flex flex-col">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleAddPlaceModal}
        >
          הוסף מקום
        </button>
        {showAddPlaceModal && (
          <AddPlaceModal
            addPlace={addPlace}
            onClose={toggleAddPlaceModal}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;