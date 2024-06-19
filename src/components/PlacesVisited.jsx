
  // PlacesVisited.jsx
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import PlaceEditModal from "./PlaceEditModal";
  import FeelAtHome from "../assets/FeelAtHome.jpg";
  
  const PlacesVisited = ({ places, addPlace, removePlace }) => {
    const [visitedPlaces, setVisitedPlaces] = useState([]);
    const [newPlace, setNewPlace] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingPlace, setEditingPlace] = useState(null);
  
  const handleAddPlace = () => {
    if (newPlace.trim()) {
      setVisitedPlaces([...visitedPlaces, newPlace.trim()]);
      setNewPlace("");
    }
  };

  const handleRemovePlace = (placeToRemove) => {
    const updatedPlaces = visitedPlaces.filter((place) => place !== placeToRemove);
    setVisitedPlaces(updatedPlaces);
  };

  const handleSelectPlace = (place) => {
    if (!visitedPlaces.includes(place)) {
      setVisitedPlaces([...visitedPlaces, place]);
      removePlace(place); // Remove the place from the original list
    }
  };

  const handleEditPlace = (place) => {
    setEditingPlace(place);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditingPlace(null);
  };

  const hasAvailablePlaces = Array.isArray(places) && places.length > 0;

  return (
<div className="bg-cover h-screen flex justify-center items-center" style={{ backgroundImage: `url(${FeelAtHome})` }}>
<div className="p-4 bg-white bg-opacity-90 rounded-lg mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">המקומות שביקרתי</h2>
        <div className="flex mb-4 justify-center">
          <div className="mr-4">
            <h3 className="text-lg font-bold mb-2">הוסף מקום חדש</h3>
            <div className="flex">
              <input
                type="text"
                value={newPlace}
                onChange={(e) => setNewPlace(e.target.value)}
                placeholder="הוסף מקום חדש"
                className="px-2 py-1 border border-gray-300 rounded mr-2"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={handleAddPlace}
              >
                הוסף
              </button>
            </div>
          </div>
          {hasAvailablePlaces && (
            <div>
              <h3 className="text-lg font-bold mb-2">בחר מתוך הרשימה</h3>
              <ul>
                {places.map((place, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`place-${index}`}
                      className="mr-2"
                      onChange={() => handleSelectPlace(place.name)}
                    />
                    <label htmlFor={`place-${index}`}>{place.name}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {visitedPlaces.length > 0 ? (
          <ul className="space-y-4">
            {visitedPlaces.map((place, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="text-lg">{place}</span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleEditPlace(place)}
                >
                  ערוך
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">אין מקומות זמינים להצגה</div>
        )}
        <div className="text-center mt-6">
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              חזור לדף הבית
            </button>
          </Link>
        </div>
      </div>
      {showEditModal && (
        <PlaceEditModal
          place={editingPlace}
          onClose={handleCloseModal}
          onDelete={handleRemovePlace}
        />
      )}
    </div>
  );
};

export default PlacesVisited;