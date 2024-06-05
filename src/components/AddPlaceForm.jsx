// components/AddPlaceForm.js
import React, { useState } from 'react';

const AddPlaceForm = ({ addPlace }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlace({ name, description });
    setName('');
    setDescription('');
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <div>
      {showSuccessMessage && (
        <div className="bg-green-500 text-white p-2 mb-2">מקום נוסף בהצלחה</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Place Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;