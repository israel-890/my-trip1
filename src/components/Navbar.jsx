// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navbar = ({ toggleTheme }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <nav className="h-16 bg-teal-500 text-white shadow-md">
      <ul className="flex justify-between items-center w-full px-8">
        <li>
          <Link to="/" className="btn-primary">
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