// App.js 
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SettingsPage from "./components/SettingsPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
        <Routes>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
