import React, { useState } from 'react';

const ContactModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //mailjs או API
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // ניקוי השדות לאחר שליחת הטופס
    setName('');
    setEmail('');
    setMessage('');

    // סגירת המודאל
    onClose();
  };

  return (
    <div className=" absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">צור קשר</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="שם"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-4/5"
          />
          <input
            type="email"
            placeholder="כתובת מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-4/5"
          />
          <textarea
            placeholder="הודעה"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-400 p-2 mb-2 w-4/5 h-32"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              ביטול
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              צור קשר
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;