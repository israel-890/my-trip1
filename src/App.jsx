// App.js (או הקובץ הראשי שמגדיר את הראוטינג)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SettingsPage from "./components/SettingsPage";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar toggleContactModal={toggleContactModal} />
        <Routes>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={<HomePage />} />
          {showContactModal && <ContactModal onClose={toggleContactModal} />}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
