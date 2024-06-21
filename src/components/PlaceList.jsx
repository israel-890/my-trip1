import React from "react";
import handleRemovePlace from "../components/PlacesVisited";

const PlaceList = ({ places, handleRemovePlace }) => {
  return (
    <div className="h-full">
      <h2 className="text-3xl font-bold mb-4 text-center bg-blue-700 rounded-none text-white py-2">
        הרשימה שלי
      </h2>
      <ul className="text-xl text-center space-y-3 px-2 mx-5">
        {places.map((place, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg flex justify-between items-center ${
              index % 2 === 0
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <span>{place.name}</span>
            <button
              className="bg-blue-400 hover:bg-red-600 text-white font-bold py-1 px-2 rounded ml-2"
              onClick={() => handleRemovePlace(place)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceList;