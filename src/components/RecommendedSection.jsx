import React from "react";

const RecommendedSection = () => {
  const properties = [
    {
      id: 1,
      price: "₹ 26000 per month",
      name: "The Willows of Plainview",
      location: "Alok Kumar",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "10 days ago",
    },
    {
      id: 2,
      price: "₹ 40000 per month",
      name: "Paranjape Blue Ridge",
      location: "Anita Puri",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "1 day ago",
    },
    {
      id: 3,
      price: "₹ 30000 per month",
      name: "Property 3",
      location: "Location 3",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "2 days ago",
    },
    {
      id: 4,
      price: "₹ 45000 per month",
      name: "Kalia Park Lake Republic",
      location: "Vidya Jais",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "1 day ago",
    },
    {
      id: 5,
      price: "₹ 27000 per month",
      name: "Amanora Trendy Homes",
      location: "Shree Dubey",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "2 days ago",
    },
    {
      id: 6,
      price: "₹ 35000 per month",
      name: "The Willows of Plainview",
      location: "Alok Kumar",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "10 days ago",
    },
    {
      id: 7,
      price: "₹ 45000 per month",
      name: "Kalia Park Lake Republic",
      location: "Vidya Jais",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "1 day ago",
    },
    {
      id: 8,
      price: "₹ 27000 per month",
      name: "Amanora Trendy Homes",
      location: "Shree Dubey",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "2 days ago",
    },
    {
      id: 9,
      price: "₹ 35000 per month",
      name: "The Willows of Plainview",
      location: "Alok Kumar",
      imgSrc: "src/assets/images/pune.jpg",
      posted: "10 days ago",
    },

   
  ];

  return (
    <div className="bg-gray-50 py-8 ">
      <div className="container mx-auto  flex flex-col items-center justify-center min-h-screen px-4 py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center  mb-4">
          <h1 className="text-xl text-red-600">Our Services</h1>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recommended For You</h2>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-3 gap-x-6 gap-y-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-none overflow-hidden"
            >
              <img
                src={property.imgSrc}
                alt={property.name}
                className="w-full h-52 md:h-52 object-cover"
              />
              <div className="px-20 py-4">
                <h3 className="text-lg font-bold">{property.price}</h3>
                <p className="text-gray-600">{property.name}</p>
                <p className="text-gray-400">{property.location}</p>
                <p className="text-gray-400 text-sm">{property.posted}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
