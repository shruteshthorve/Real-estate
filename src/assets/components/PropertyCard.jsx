import React from "react";

const PropertyCard = ({
  price,
  title,
  location,
  rooms,
  bathrooms,
  size,
  pets,
  agent,
  daysAgo,
  image,
}) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <img
        src={image}
        alt={title}
        className="w-[388px] h-[238px] object-cover"
      />
      <div className="p-4">
        <div className="text-red-500 font-semibold text-lg">
          {price} per month
        </div>
        <div className="font-bold text-gray-800 text-xl mt-2">{title}</div>
        <div className="text-gray-500 text-sm mb-4">{location}</div>
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <span className="mr-1">🛏️</span> {rooms}
          </div>
          <div className="flex items-center ">
            <span className="mr-1">🛁</span> {bathrooms}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📏</span> {size} sqft
          </div>
          <div className="flex items-center">
            <span className="mr-1">🐾</span> {pets ? "Allowed" : "Not Allowed"}
          </div>
        </div>
        <div className="flex items-center mt-4 text-gray-600">
          <img
            src={agent.image}
            alt={agent.name}
            className="  w-8 h-8 rounded-full mr-2"
          />
          <div>
            <div className="font-semibold ">{agent.name}</div>
            <div className="text-sm ">{daysAgo} Days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyList = () => {
  const properties = [
    {
      price: "₹ 30000",
      title: "Paranjape Blue Ridge",
      location: "Wanwadi, Pune, Maharashtra",
      rooms: 2,
      bathrooms: 2,
      size: 1200,
      pets: true,
      agent: { name: "Anil Pore", image: "src/assets/Ellipse 81.png" },
      daysAgo: 1,
      image: "src/assets/Rectangle 3218.png",
    },
    {
      price: "₹ 32000",
      title: "Kolte-Patil 24k Glamore",
      location: "No 545, NIBM Road, Pune, Maharashtra",
      rooms: 1,
      bathrooms: 2,
      size: 1000,
      pets: true,
      agent: { name: "Vishwas Dubey", image: "src/assets/Ellipse 81.png" },
      daysAgo: 2,
      image: "src/assets/Rectangle 3219.png",
    },
    {
      price: "₹ 30000",
      title: "The Willows of Plainview",
      location: "Pushpanagari Apartment, Kothrud",
      rooms: 1,
      bathrooms: 2,
      size: 1000,
      pets: true,
      agent: { name: "Swati Sharma", image: "src/assets/Ellipse 81.png" },
      daysAgo: 2,
      image: "src/assets/Rectangle 3220.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyList;
