import React from 'react';
import { FaShoppingBag, FaAppleAlt, FaTshirt, FaMobileAlt } from 'react-icons/fa';

const Loader = ({ text = 'Loading EasyMart...' }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/70 z-50">
      {/* Animated Icons */}
      <div className="flex space-x-4 mb-6 animate-bounce">
        <FaShoppingBag className="text-[#F02640] w-10 h-10" />
        <FaAppleAlt className="text-green-500 w-10 h-10" />
        <FaTshirt className="text-blue-500 w-10 h-10" />
        <FaMobileAlt className="text-yellow-500 w-10 h-10" />
      </div>

      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-[#F02640] border-gray-200 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-semibold text-gray-700">{text}</p>
    </div>
  );
};

export default Loader;
