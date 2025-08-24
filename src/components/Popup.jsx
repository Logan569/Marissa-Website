import React, { useEffect } from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when popup is closed
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div 
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full m-4 z-[10000] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl text-center  text-color-3 font-bold mb-4">Booking Information</h2>
        <a href="sms:+19036179057" className="mb-4 text-center text-color-3 block hover:text-color-1">Text me!</a>
        <a href="https://m.me/hamubymarissaself" className="mb-4 text-center text-color-3 block hover:text-color-1">Facebook Message Me!</a>
        <a href="https://instagram.com/hamubymarissaself" className="mb-4 text-center text-color-3 block hover:text-color-1">Instagram DM me!</a>
        {children}
      </div>
    </div>
  );
};

export default Popup;