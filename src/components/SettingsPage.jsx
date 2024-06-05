// components/SettingsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">הגדרות</h2>
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-lg font-bold mb-2">אופציות</h3>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="option1" className="mr-2" />
          <label htmlFor="option1">אופציה 1</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="option2" className="mr-2" />
          <label htmlFor="option2">אופציה 2</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="option3" className="mr-2" />
          <label htmlFor="option3">אופציה 3</label>
        </div>
      </div>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        חזור לדף הבית
      </Link>
    </div>
  );
};

export default SettingsPage;