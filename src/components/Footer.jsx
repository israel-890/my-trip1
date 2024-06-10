// components/Footer.js
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import GoogleMapReact from "google-map-react";


const Footer = () => {
    const mapOurLocation = { lat: 31.754275, lng: 34.992922 };
    const [showContactModal, setShowContactModal] = useState(false);

    const toggleContactModal = () => {
      setShowContactModal(!showContactModal);
    };
  return (
    <footer className="bg-brown text-white p-4 text-center mt-auto">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">We're on Social Media</h3>
          <div className="flex items-center mb-2">
            <a
              href="https://www.linkedin.com/in/yosefgeller/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-800 hover:text-blue-600 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.106 6.106a1.535 1.535 0 01-1.534-1.535 1.535 1.535 0 111.534 1.535zm1.336 10.232H3.77V8.59h2.672v7.748zM19.75 0H.25C.112 0 0 .112 0 .25v19.5c0 .138.112.25.25.25h19.5c.138 0 .25-.112.25-.25V.25c0-.138-.112-.25-.25-.25z"
                  clipRule="evenodd"
                />
              </svg>
              יוסף גלר
            </a>
            <a
              href="https://www.linkedin.com/in/israelb8411890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-800 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.106 6.106a1.535 1.535 0 01-1.534-1.535 1.535 1.535 0 111.534 1.535zm1.336 10.232H3.77V8.59h2.672v7.748zM19.75 0H.25C.112 0 0 .112 0 .25v19.5c0 .138.112.25.25.25h19.5c.138 0 .25-.112.25-.25V.25c0-.138-.112-.25-.25-.25z"
                  clipRule="evenodd"
                />
              </svg>
              ישראל בוכבינדר
            </a>
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">נשמח להשתמע</h3>
          <p className="mb-2">info@example.com</p>
          <p className="mb-2">+1 (555) 123-4567</p>
            <button onClick={toggleContactModal} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              צור קשר
            </button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">המיקום שלנו</h3>
          <div className="w-64 h-40 bg-gray-200">
          <GoogleMapReact
          bootstrapURLKeys={{
            key:"AIzaSyBE_SSzcqj9Ty_y0BOJi3L1lkA9f7oDZao",
          }}
          defaultCenter={mapOurLocation}
          defaultZoom={14}
        />
          </div>
        </div>
      </div>
      {showContactModal && <ContactModal onClose={toggleContactModal} />}
    </footer>
  );
};

export default Footer;