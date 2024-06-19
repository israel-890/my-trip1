// App.js 
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SettingsPage from "./components/SettingsPage";
import AboutPage from "./components/AboutPage";
import PlacesVisited from "./components/PlacesVisited";
import Footer from "./components/Footer";

function App() {
  const [places, setPlaces] = useState([]);     

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const removePlace = (index) => {
    const updatedPlaces = [...places];
    updatedPlaces.splice(index, 1);
    setPlaces(updatedPlaces);
  };
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
        <Routes>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visited-places" element={<PlacesVisited places={places} addPlace={addPlace} removePlace={removePlace} />} />
          <Route path="/" element={<HomePage places={places} addPlace={addPlace} removePlace={removePlace} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
