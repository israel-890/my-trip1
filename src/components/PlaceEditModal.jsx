import React, { useState } from "react";

const PlaceEditModal = ({ place, onClose, onDelete, onEdit }) => {
  const [editedPlace, setEditedPlace] = useState({ ...place });

  const handleInputChange = (e) => {
    setEditedPlace({
      ...editedPlace,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onEdit(editedPlace); // העבר את `editedPlace` לפונקציה `onEdit`
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete(place.id); // העבר את מזהה המקום לפונקציה `onDelete`
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
           {" "}
      <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">ערוך מקום</h2>       {" "}
        <form>
                   {" "}
          <div className="mb-4">
                       {" "}
            <label htmlFor="name" className="block font-bold mb-2">
                            שם המקום            {" "}
            </label>
                       {" "}
            <input
              type="text"
              id="name"
              name="name"
              value={editedPlace.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
                     {" "}
          </div>
                   {" "}
          <div className="mb-4">
                       {" "}
            <label htmlFor="description" className="block font-bold mb-2">
                            תיאור המקום            {" "}
            </label>
                       {" "}
            <textarea
              id="description"
              name="description"
              value={editedPlace.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
                     {" "}
          </div>
                   {" "}
          <div className="flex justify-end">
                       {" "}
            <button
              type="button"
              onClick={handleCancel}
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
                            ביטול            {" "}
            </button>
                       {" "}
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                            מחק            {" "}
            </button>
                       {" "}
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                            שמור            {" "}
            </button>
                     {" "}
          </div>
                 {" "}
        </form>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default PlaceEditModal;
