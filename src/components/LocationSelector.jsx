import React, { useState, useEffect } from 'react';
import Map from './Map';

const LocationSelector = ({ onClose }) => {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // טעינת רשימת המיקומים
    const mockLocations = [
      { id: 1, name: 'תל אביב', description: 'עיר החוף התוססת' },
      { id: 2, name: 'ירושלים', description: 'העיר העתיקה והקדושה' },
      // ... עוד מיקומים
    ];
    setLocations(mockLocations);
    setFilteredLocations(mockLocations);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = locations.filter(location => 
      location.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {!selectedLocation ? (
        <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
          <div className="mb-4">
            <input
              type="text"
              placeholder="חפש מיקום..."
              className="w-full p-2 border rounded"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <ul className="max-h-80 overflow-y-auto mb-4">
            {filteredLocations.map((location, index) => (
              <li
                key={location.id}
                className={`p-3 cursor-pointer hover:bg-blue-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
                onClick={() => handleLocationSelect(location)}
              >
                {location.name}
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={onClose}
            >
              ביטול
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">{selectedLocation.name}</h2>
          <p className="mb-4">{selectedLocation.description}</p>
          <div className="mb-4 h-36 w-36 overflow-hidden">
            <Map location={selectedLocation} />
          </div>
          <div className="flex justify-between">
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedLocation(null)}
            >
              סגור
            </button>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {
                // לוגיקה לשליחת בקשה ל-AI Studio
                console.log('שולח בקשה ל-AI Studio עבור', selectedLocation.name);
              }}
            >
              קבל מידע נוסף (AI)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;