import React from "react";
import ContactCard from "./ContactCard";
import PropertyList from "./PropertyCard";
import Search from "./Search";

const reviews = [
  {
    id: 1,
    name: "Abhijeet Das",
    date: "June 12, 2024",
    rating: 4,
    review:
      "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.",
    avatar: "src//assets//Ellipse 82.png",
  },
  {
    id: 2,
    name: "Shivani Desai",
    date: "June 11, 2024",
    rating: 4,
    review:
      "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.",
    avatar: "src//assets//Ellipse 83.png",
  },
  {
    id: 3,
    name: "Chetan Oswal",
    date: "June 11, 2024",
    rating: 3,
    review:
      "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.",
    avatar: "src//assets//Ellipse 84.png",
  },
  {
    id: 4,
    name: "Bhavika Agarwal",
    date: "June 10, 2024",
    rating: 4,
    review:
      "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.",
    avatar: "src//assets//Ellipse 85.png",
  },
];

function ProductDetail() {
  return (
    <div className="bg-gray-100  ">
      <img
        className="w-full h-[250px] md:h-[507px]  object-cover"
        src="src/assets/Rectangle 1.png"
        alt=""
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ml-4 mt-4 md:ml-11">
        <img
          className="h-[150px] md:h-[195px] object-cover"
          src="src/assets/Rectangle 2.png"
          alt=""
        />
        <img
          className="h-[150px] md:h-[195px] object-cover"
          src="src/assets/Rectangle.png"
          alt=""
        />
        <img
          className="h-[150px] md:h-[195px] object-cover"
          src="src/assets/Rectangle 4.png"
          alt=""
        />
        <img
          className="h-[150px] md:h-[195px] object-cover"
          src="src/assets/Rectangle 5.png"
          alt=""
        />
        <img
          className="h-[150px] md:h-[195px] object-cover"
          src="src/assets/Rectangle 6.png"
          alt=""
        />
        <img
          className="h-[150px] md:h-[195px] object-cover"
          src="src/assets/Frame 1000003558.png"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mt-8 ml-4 md:ml-[90px] gap-4 md:gap-12">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <button className="h-[39px] w-[107px] bg-red-500 text-white rounded-md mb-2">
                  For Rent
                </button>
                <h3 className="text-lg md:text-xl">Paranjape Blue Ridge</h3>
                <p>Wanwadi, Pune, Maharashtra</p>
              </div>

              <div className="flex flex-col items-end">
                <p className="font-bold text-red-500 text-lg md:text-xl">
                  ₹32,000
                </p>
                <p className="text-sm">See other Charges</p>
              </div>
            </div>

            <hr className="my-4 border-gray-300" />

            <p className="text-gray-500 mb-4">Features:</p>

            <div className="flex gap-2 mb-2 flex-wrap">
              <img src="src/assets/bed.png" alt="Bed" />
              <p>2 Bedrooms |</p>
              <img src="src/assets/bathtub.png" alt="Bathtub" />
              <p>2 Bathrooms |</p>
              <img src="src/assets/car_repair.png" alt="Parking" />
              <p>2 Parkings |</p>
              <img src="src/assets/gondola_lift.png" alt="Lift" />
              <p>2 Lifts |</p>
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              <img src="src/assets/pets.png" alt="Pets" />
              <p>Pet Friendly |</p>
              <img src="src/assets/bia.png" alt="Area" />
              <p>1300 Sqft |</p>
              <img src="src/assets/balcony.png" alt="Balcony" />
              <p>2 Balconies |</p>
            </div>

            <h3 className="mb-2">Description</h3>
            <p>
              3 BHK FLAT IS AVAILABLE FOR RENT WITH A MODULAR KITCHEN ON AN
              IMMEDIATE BASIS. FOR MORE DISCUSSION AND VISIT KINDLY CALL US OR
              VISIT SHOP N0 211, SECOND FLOOR, R6 COMMERCIAL, KOLTE...{" "}
              <a href="#" className="text-red-500">
                READ MORE
              </a>
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="mb-4">Video</p>
              <img src="src/assets/Group 1110.png" alt="" />
            </div>

            <div className="bg-white  p-4 md:p-6 rounded-lg shadow-md mt-8">
              <div className="text-lg font-bold mb-4">Property Details</div>

              {/* Property Details */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Property ID:</span>
                  <span className="ml-2">AVT1020</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Property Status:</span>
                  <span className="ml-2 font-semibold">For Rent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Price:</span>
                  <span className="ml-2">₹32000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Bedrooms:</span>
                  <span className="ml-2">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Security Deposit:</span>
                  <span className="ml-2">₹40000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Bathrooms:</span>
                  <span className="ml-2">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Year Built:</span>
                  <span className="ml-2">2022-12-11</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Balconies:</span>
                  <span className="ml-2">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Property Type:</span>
                  <span className="ml-2">House, Apartment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Parkings:</span>
                  <span className="ml-2">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Furnishing:</span>
                  <span className="ml-2">Semifurnished</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>

              {/* Reviews */}
              {reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[40px] h-[40px] rounded-full object-cover"
                        src={review.avatar}
                        alt={review.name}
                      />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          {i < review.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full  md:w-1/3 flex flex-col gap-8 ">
          <ContactCard />
          <Search />
        </div>
      </div>

      {/* Previously Used Property */}
      <div className="bg-white w-full md:w-[1264px] h-auto p-4 md:h-[567px] mt-5 mx-4 md:ml-[111px]">
        <p className="text-bold mb-4">Previously used property</p>
        <PropertyList />
      </div>
    </div>
  );
}

export default ProductDetail;
