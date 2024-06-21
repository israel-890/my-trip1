import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import PlaceList from "../components/PlaceList";
import AddPlaceModal from "../components/AddPlaceModal";
import PlaceDetails from "../components/PlaceDetails";
import LocationSelector from '../components/LocationSelector';
import PlaceEditModal from "../components/PlaceEditModal";

const HomePage = ({ places, addPlace, removePlace, editPlace }) => {
  const [showAddPlaceModal, setShowAddPlaceModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const toggleAddPlaceModal = () => {
    setShowAddPlaceModal(!showAddPlaceModal);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
  };

  const handleEditPlace = (place) => {
    setEditingPlace(place);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingPlace(null);
  };

  const handleSaveEdit = (editedPlace) => {
    editPlace(editedPlace);
    handleCloseEditModal();
  };

  useEffect(() => {
    if (showEditModal && places.length === 0) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setShowEditModal(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [showEditModal, places]);

  return (
    <div className="flex flex-grow bg-lightGreen mt-3 pb-6 pt-4">
      <div className="w-4/5 h-full flex">
        <div className="relative w-1/2 h-full mx-5">
          <Map places={places} />
        </div>
        <div className="relative w-1/2 h-full pt-4 px-0 mx-5 border-solid border-2 border-blue-700 rounded-xl text-white font-bold tracking-wide leading-loose place-list-container">
          <PlaceList places={places} />
        </div>
      </div>
      <div className="relative w-1/5 h-full flex flex-col ml-5 mr-0">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-s-full mb-4"
          onClick={toggleAddPlaceModal}
        >
          הוסף מקום
        </button>
        {showAddPlaceModal && (
          <AddPlaceModal addPlace={addPlace} onClose={toggleAddPlaceModal} />
        )}
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-s-full mb-4" onClick={() => setShowLocationSelector(true)}>
        אז בא נצא לדרך
      </button>
      {showLocationSelector && (
        <LocationSelector onClose={() => setShowLocationSelector(false)} />
      )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-s-full mb-4"
          onClick={() => handleEditPlace(null)}
        >
          ערוך מקומות
        </button>
      </div>
      {selectedPlace && (
        <div className="fixed bottom-0 left-0 w-full p-4">
          <PlaceDetails selectedPlace={selectedPlace} />
        </div>
      )}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">ערוך מקומות</h2>
            {places.length > 0 ? (
              <ul>
                {places.map((place, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mb-2"
                  >
                    <span>{place.name}</span>
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
              <div className="text-center">אין מקומות זמינים לעריכה</div>
            )}
          </div>
        </div>
      )}
      {editingPlace && (
        <PlaceEditModal
          place={editingPlace}
          onClose={handleCloseEditModal}
          onDelete={removePlace}
          onEdit={handleSaveEdit}
        />
      )}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative">
            <div className="text-center">אין מקומות זמינים לעריכה</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;