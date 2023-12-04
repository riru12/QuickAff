// Modal.jsx

import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <p>Are you sure?</p>
        <p>This action is <b>irreversible</b>.</p>
        <button onClick={onClose} className="text-gray-400">Close</button>
      </div>
    </div>
  );
};

export default Modal;
