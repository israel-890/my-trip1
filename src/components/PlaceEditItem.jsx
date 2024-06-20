import React, { useState } from "react";

const PlaceEditItem = ({ place, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedPlace, setEditedPlace] = useState({ ...place });

  const handleInputChange = (e) => {
    setEditedPlace({
      ...editedPlace,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = () => {
    onEdit(editedPlace);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  if (editing) {
    return (
      <li>
        <input
          type="text"
          name="name"
          value={editedPlace.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={editedPlace.description}
          onChange={handleInputChange}
        />
        <button onClick={handleSaveEdit}>שמור</button>
        <button onClick={handleCancelEdit}>ביטול</button>
      </li>
    );
  }

  return (
    <li>
      <span>{place.name}</span>
      <span>{place.description}</span>
      <button onClick={() => setEditing(true)}>ערוך</button>
    </li>
  );
};

export default PlaceEditItem;