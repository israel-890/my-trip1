// App.jsx 
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SettingsPage from "./components/SettingsPage";
import AboutPage from "./components/AboutPage";
import PlacesVisited from "./components/PlacesVisited";
import Footer from "./components/Footer";
import IntroVideo from "./components/IntroVideo";

function App() {
  const [places, setPlaces] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      console.log("Intro video is showing");
      // טיימר גיבוי במקרה שהסרטון לא מסתיים כצפוי
      const timer = setTimeout(() => {
        console.log("Backup timer triggered");
        setShowIntro(false);
      }, 10000); // 10 שניות
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  const removePlace = (index) => {
    const updatedPlaces = [...places];
    updatedPlaces.splice(index, 1);
    setPlaces(updatedPlaces);
  };

  const handleVideoEnd = () => {
    console.log("Video ended");
    setShowIntro(false);
  };
  
  if (showIntro) {
    return <IntroVideo onVideoEnd={handleVideoEnd} />;
  }

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