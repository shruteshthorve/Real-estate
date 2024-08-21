import React from 'react';

const RegisterPage = () => {
  const categories = [
    { name: 'Residential', properties: 55 },
    { name: 'Commercial', properties: 88 },
    { name: 'Vacation & Resort', properties: 74 },
    { name: 'New Construction', properties: 72 },
    { name: 'Luxury Estate', properties: 49 },
    { name: 'Eco Friendly', properties: 53 },
    { name: 'The Land', properties: 65 },
    { name: 'Historic Properties', properties: 28 },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-6xl mt-8 px-4">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500">300+</h2>
            <p className="text-black text-sm sm:text-base">Happy Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500">1K+</h2>
            <p className="text-black text-sm sm:text-base">Property Ready</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500">80+</h2>
            <p className="text-black text-sm sm:text-base">Completed Agents</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500">60%</h2>
            <p className="text-black text-sm sm:text-base">Years Growth</p>
          </div>
        </div>
        
        {/* Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-200 shadow-md rounded p-4 text-center">
              <div className="text-gray-600 text-lg font-semibold">{category.name}</div>
              <div className="text-gray-500">{category.properties} Properties</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;


