// PlacesVisited.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeelAtHome from "../assets/FeelAtHome.jpg";
import CheckIcon from "../assets/CheckIcon.png";

const PlacesVisited = ({ places, addPlace, removePlace }) => {
  const [visitedPlaces, setVisitedPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState("");

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

  const handleSelectPlace = (placeName) => {
    if (!visitedPlaces.includes(placeName)) {
      setVisitedPlaces([...visitedPlaces, placeName]);
      removePlace(placeName); // Remove the place from the original list
    }
  };

  const hasAvailablePlaces = Array.isArray(places) && places.length > 0;

  return (
    <div
      className="bg-cover h-screen flex justify-center items-start"
      style={{ backgroundImage: `url(${FeelAtHome})` }}
    >
      <div className=" p-4 bg-white bg-opacity-90 rounded-lg mx-auto my-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">המקומות שביקרתי</h2>
        <div className="flex mb-4 justify-center">
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
                      checked={visitedPlaces.includes(place.name)}
                    />
                    <label htmlFor={`place-${index}`}>{place.name}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {visitedPlaces.length > 0 ? (
          <ul className="list-none">
            {visitedPlaces.map((place, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    src={CheckIcon}
                    alt="וי"
                    className="w-4 h-4 mr-1 text-blue-600"
                  />
                  <span className="text-lg text-blue-600">{place}</span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleRemovePlace(place)}
                >
                  מחיק
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">אין מקומות זמינים להצגה</div>
        )}
        <div className="mr-4 mt-4">
          <h3 className="text-lg font-bold mb-2 text-center">הוסף מקום חדש</h3>
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
        <div className="text-center mt-6">
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              חזור לדף הבית
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlacesVisited;
