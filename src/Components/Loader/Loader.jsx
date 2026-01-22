import React, { useState} from 'react';

const Loader = () => {
  const [loading] = useState(true);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid border-b-transparent"></div>
            {/* Loading Text */}
          <p className="mt-4  ">Welcome to!</p>
            <p className=" textColor1 text-2xl md:text-3xl lg:text-5xl font-bold"> <span className="text-zinc-800">Easy</span>Mart</p>
            <p className="mt-4  ">Your Shopping Destination</p>
        </div>
      ) : (
        <div className="textColor1 text-2xl font-bold">
          Welcome to EasyMart!
        </div>
      )}
    </div>
  );
};

export default Loader;