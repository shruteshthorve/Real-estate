
import React from "react";
import image from "../assets/images/Bg.png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-[400px] sm:h-[500px] md:h-[600px] relative">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover rounded-md"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4 md:px-0">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold">
            Find the Perfect Place <br className="hidden md:block" /> to Call Home
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-lg">
            Explore a wide range of properties in the most desirable locations. 
            Whether you’re looking for a cozy apartment, a spacious family home, 
            or a luxurious estate, we have listings to suit every lifestyle and budget.
          </p>
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            <button className="bg-red-600 text-white px-4 md:px-6 py-2 rounded-lg md:rounded-full text-sm md:text-base">
              Rent
            </button>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-lg md:rounded-full text-sm md:text-base">
              Buy
            </button>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-lg md:rounded-full text-sm md:text-base">
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

