// App.js (או הקובץ הראשי שמגדיר את הראוטינג)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SettingsPage from "./components/SettingsPage";
import ContactModal from "./components/ContactModal";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <Router>
      <div className="h-screen">
        <Navbar toggleContactModal={toggleContactModal} />
        <Routes>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
          {showContactModal && <ContactModal onClose={toggleContactModal} />}
          <footer />
      </div>
    </Router>
  );
}

export default App;
