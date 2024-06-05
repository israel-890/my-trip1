import React, { useState } from 'react';

const AddPlaceModal = ({ addPlace, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlace({ name, description, image });
    setName('');
    setDescription('');
    setImage(null);
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImagePaste = (e) => {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        setImage(file);
        break;
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">הוסף מקום חדש</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="שם המקום"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-4/5"
          />
          <textarea
            placeholder="תיאור המקום"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-4/5"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-2"
          />
          <div className="mb-2">
            <button
              type="button"
              onClick={handleImagePaste}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              הדבקה מצילום מסך
            </button>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              ביטול
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              הוסף מקום
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlaceModal;