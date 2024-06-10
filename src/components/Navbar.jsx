// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Navbar = ({ toggleTheme }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <nav className="h-36 w-full bg-sky text-white p-4">
      <h1 className="text-center">My Trip</h1>
      <h2 className="text-center subpixel-antialiased">האתר שעושה כיף לטייל</h2>
      <ul className="flex justify-center space-x-4 flex-grow items-center bg-sky text-white p-4 shadow-md ">
        <li>
          <Link to="/" className="btn-primary h-6">
            Home
          </Link>
        </li>
        <li>
          <Link to="/settings" className="btn-primary">
            הגדרות
          </Link>
        </li>
        <li>
          <Link to="/Places Visited" className="btn-primary">
            מקומות שביקרתי
          </Link>
        </li>
        <li>
          <button onClick={toggleContactModal} className="btn-primary">
            צור קשר
          </button>
        </li>
      </ul>
      {showContactModal && <ContactModal onClose={toggleContactModal} />}
    </nav>
  );
};

export default Navbar;
