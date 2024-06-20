// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";

const Navbar = () => {
  return (
    <nav className="h-auto w-full bg-sky text-white shadow-green-900 shadow-xl p-4 mb-6">
      <h1 className="text-3xl text-center font-bold mb-3 tracking-wide text-blue-700">My Trip</h1>
      <h2 className="text-xl text-center subpixel-antialiased mb-2">האתר שעושה כיף לטייל</h2>
      <ul className="flex justify-center space-x-4 flex-grow items-center bg-sky text-white p-2 ">
        <li>
          <Link to="/" className="btn-primary h-6">
            הרשימה שלי
          </Link>
        </li>
        <li>
          <Link to="/about" className="btn-primary">
            אודות
          </Link>
        </li>
        <li>
          <Link to="/settings" className="btn-primary">
            הגדרות
          </Link>
        </li>
        <li>
          <Link to="/visited-places" className="btn-primary">
            מקומות שביקרתי
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
