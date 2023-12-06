// Renewal.jsx

import React, { useState } from 'react';
import Modal from './Modal'; 

const Renewal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRenewalClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    // PAST DREI: Di ako sure bat kahit na may left margin na sa parent
    // div (ml-32), di sumasama mga anak nya kaya may ml-32 pa sa button
    // na Begin Renewal for instance
    <div className="text-black ml-32 p-4 flex"> 
      <button
        className="bg-red-500 px-4 text-white pt-0 rounded font-bold text-3xl"
        onClick={handleRenewalClick}
      >
        Begin Renewal
      </button>
      <div className="p-4 max-w-3xl"> 
        <p className="text-red-600 font-bold ">
          Warning
        </p>
        <p>
          This resets the membership status of all non-alumni members to
          non-renewed and begins the renewal process for all members of the
          organization. Proceed cautiously.
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Renewal;
