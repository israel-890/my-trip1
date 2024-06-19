// PlaceEditModal.jsx
import React from "react";

const PlaceEditModal = ({ place, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(place);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">ערוך את המקום</h3>
        <p className="mb-4">{place}</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
            onClick={handleDelete}
          >
            מחק
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
          >
            ערוך
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
            onClick={onClose}
          >
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceEditModal;