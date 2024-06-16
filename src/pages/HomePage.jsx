import React, { useState } from "react";
import Map from "../components/Map";
import PlaceList from "../components/PlaceList";
import AddPlaceModal from "../components/AddPlaceModal";
import PlaceDetails from '../components/PlaceDetails';
import TripModal from '../components/TripModal';

const HomePage = () => {
  const [places, setPlaces] = useState([]);
  const [showAddPlaceModal, setShowAddPlaceModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showTripModal, setShowTripModal] = useState(false);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const toggleAddPlaceModal = () => {
    setShowAddPlaceModal(!showAddPlaceModal);
  };

  const toggleTripModal = () => {
    setShowTripModal(!showTripModal);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className="flex flex-grow bg-lightGreen p-4">
      <div className="w-4/5 h-full flex">
        <div className="relative w-1/2 h-full">
          <Map places={places} />
        </div>
        <div className="relative w-1/2 h-full p-4 text-white font-bold tracking-wide leading-loose">
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-s-full mb-4"
          onClick={toggleTripModal}
        >
          אז בא נצא לדרך
        </button>
        {showTripModal && (
          <TripModal
            places={places}
            onSelectPlace={handlePlaceSelect}
            onClose={toggleTripModal}
          />
        )}
      </div>
      {selectedPlace && (
        <div className="fixed bottom-0 left-0 w-full p-4">
          <PlaceDetails selectedPlace={selectedPlace} />
        </div>
      )}
    </div>
  );
};

export default HomePage;