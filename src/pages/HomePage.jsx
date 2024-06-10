// HomePage.js
import React, { useState } from "react";
import Map from "../components/Map";
import PlaceList from "../components/PlaceList";
import AddPlaceModal from "../components/AddPlaceModal";

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
    <div className="flex flex-grow bg-lightGreen p-4">
      <div className="w-4/5 h-full flex">
        <div className="relative w-1/2 h-full">
          <Map places={places} />
        </div>
        <div className="relative w-1/2 h-full p-4 text-white font-bold">
          <PlaceList places={places} />
        </div>
      </div>
      <div className="relative w-1/5 h-full flex flex-col">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-s-full mb-4"
          onClick={toggleAddPlaceModal}
        >
          הוסף מקום
        </button>
        {showAddPlaceModal && (
          <AddPlaceModal addPlace={addPlace} onClose={toggleAddPlaceModal} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
