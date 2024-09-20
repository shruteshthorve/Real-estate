import React from 'react';

const locations = [
  { name: 'Vadodara', image: 'src/assets/images/pune.jpg' },
  { name: 'Pune', image: 'src/assets/images/pune.jpg' },
  { name: 'Mumbai', image: 'src/assets/images/pune.jpg' },
  { name: 'Thane', image: 'src/assets/images/pune.jpg' },
  { name: 'Nashik', image: 'src/assets/images/pune.jpg' },
  // Add more locations as needed
];

const LocationCarousel = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Our Locations For You</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-2 md:px-0">
        {locations.map((location, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-40 md:w-60 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              src={location.image} 
              alt={location.name} 
              className="w-full h-32 md:h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold">{location.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCarousel;
