import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">What We Do?</h2>
      <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="max-w-sm p-6 border rounded-lg shadow-md text-center mx-auto">
          <img src="src/assets/images/buy 1.png" alt="Buy A New Home" className="mx-auto mb-4 h-40 w-40 object-contain" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Buy A New Home</h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Learn More
          </button>
        </div>
        <div className="max-w-sm p-6 border rounded-lg shadow-md text-center mx-auto">
          <img src="src/assets/images/house 1.png" alt="Rent A Home" className="mx-auto mb-4 h-40 w-40 object-contain" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Rent A Home</h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Learn More
          </button>
        </div>
        <div className="max-w-sm p-6 border rounded-lg shadow-md text-center mx-auto">
          <img src="src/assets/images/sale 1.png" alt="Sell A Home" className="mx-auto mb-4 h-40 w-40 object-contain" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Sell A Home</h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;




