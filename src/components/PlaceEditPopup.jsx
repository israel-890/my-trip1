import React from "react";
import PlaceEditItem from "./PlaceEditItem";

const PlaceEditPopup = ({ places, onEdit, onClosePopup }) => {
  const handleEditPlace = (editedPlace) => {
    onEdit(editedPlace);
    onClosePopup();
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">ערוך מקומות</h2>
      {places.length > 0 ? (
        <ul>
          {places.map((place, index) => (
            <PlaceEditItem
              key={index}
              place={place}
              onEdit={handleEditPlace}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center">אין מקומות זמינים לעריכה</div>
      )}
    </div>
  );
};

export default PlaceEditPopup;