import React from "react";

import ContactCard from "./ContactCard";
import PropertyList from "./PropertyCard";

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
    <div className=" bg-gray-100">
      <img
        className="w-full h-[507px] "
        src="src/assets/Rectangle 1.png"
        alt=""
      />

      <div className="flex gap-10 ml-11 mt-4 ">
        <img
          className="h-[195px] w-[195px] object-cover"
          src="src/assets/Rectangle 2.png"
          alt=""
        />

        <img
          className="h-[195px] w-[195px] object-cover"
          src="src/assets/Rectangle.png"
          alt=""
        />

        <img
          className="h-[195px] w-[195px] object-cover"
          src="src/assets/Rectangle 4.png"
          alt=""
        />

        <img
          className="h-[195px] w-[195px] object-cover"
          src="src/assets/Rectangle 5.png"
          alt=""
        />

        <img
          className="h-[195px] w-[195px] object-cover"
          src="src/assets/Rectangle 6.png"
          alt=""
        />

        <img
          className="h-[195px] w-[195px] gap-6 object-cover"
          src="src/assets/Frame 1000003558.png"
          alt=""
        />
      </div>

      <div className="flex justify-start items-start mt-8 ml-[90px] gap-12 ">
        {/* Left Section */}
        <div className="h-[539px] w-[827px] ml-6 bg-white">
          <div className="flex justify-between items-start ml-6 mt-5">
            <div className="flex flex-col mt-5">
              <button className="h-[39px] w-[107px] bg-red-500 text-white rounded-md mb-2">
                For Rent
              </button>
              <h3>Paranjape Blue Ridge</h3>
              <p>Wanwadi, Pune, Maharashtra</p>
            </div>

            <div className="flex flex-col items-end mt-5 mr-6">
              <p className="font-bold text-red-500 text-lg">₹32,000</p>
              <p className="text-sm">See other Charges</p>
            </div>
          </div>

          <hr className="my-4 border-gray-300 mt-12" />

          <p className="ml-6 mt-4 size-4 text-gray-500">Features:</p>

          <div className="flex mt-4 ml-6 gap-2">
            <img className="" src="src/assets/bed.png" alt="Bed" />
            <p>2 Bedrooms |</p>
            <img className="" src="src/assets/bathtub.png" alt="Bathtub" />
            <p>2 Bathrooms |</p>
            <img className="" src="src/assets/car_repair.png" alt="Parking" />
            <p>2 Parkings |</p>
            <img className="" src="src/assets/gondola_lift.png" alt="Lift" />
            <p>2 Lifts |</p>
          </div>

          <div className="flex mt-4 ml-6 gap-2">
            <img className="" src="src/assets/pets.png" alt="Pets" />
            <p>2 Pet Friendly |</p>
            <img className="" src="src/assets/bia.png" alt="Area" />
            <p>1300 Sqft |</p>
            <img className="" src="src/assets/balcony.png" alt="Balcony" />
            <p>2 Balconies |</p>
          </div>

          <h3 className="ml-6 mt-5">Description</h3>
          <p className="ml-6 mt-5">
            3 BHK FLAT IS AVAILABLE FOR RENT WITH A MODULAR KITCHEN ON AN
            IMMEDIATE BASIS. FOR MORE DISCUSSION AND VISIT KINDLY CALL US OR
            VISIT SHOP N0 211, SECOND FLOOR, R6 COMMERCIAL, KOLTE...
            <a href="#" className="text-red-500">
              READ MORE
            </a>
          </p>
        </div>

        {/* Right Section - Contact Card */}
        <div className="ml-8">
          <ContactCard />
        </div>
      </div>

      <div>
        <div className="ml-[111px] h-[311px] bg-white w-[827px] mt-8">
          <p className="ml-6 mt-5">Video</p>
          <img className="ml-5" src="src/assets/Group 1110.png" alt="" />
        </div>

        <div className="h-[356px] w-[828px] bg-gray-100 flex   p-4 ml-[92px]">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
            <div className="text-lg font-bold mb-4">Property Details</div>

            {/* Row 1 */}
            <div className="flex justify-between mb-4">
              <div className="flex">
                <span className="text-gray-700">Property ID:</span>
                <span className="ml-2">AVT1020</span>
              </div>
              <div className="flex">
                <span className="text-gray-700">Property Status:</span>
                <span className="ml-2 font-semibold">For Rent</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between mb-4">
              <div className="flex">
                <span className="text-gray-700">Price:</span>
                <span className="ml-2">₹32000</span>
              </div>
              <div className="flex">
                <span className="text-gray-700">Bedrooms:</span>
                <span className="ml-2">2</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex justify-between mb-4">
              <div className="flex">
                <span className="text-gray-700">Security Deposit:</span>
                <span className="ml-2">₹40000</span>
              </div>
              <div className="flex">
                <span className="text-gray-700">Bathrooms:</span>
                <span className="ml-2">2</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex justify-between mb-4">
              <div className="flex">
                <span className="text-gray-700">Year Built:</span>
                <span className="ml-2">2022-12-11</span>
              </div>
              <div className="flex">
                <span className="text-gray-700">Balconies:</span>
                <span className="ml-2">2</span>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex justify-between mb-4">
              <div className="flex">
                <span className="text-gray-700">Property Type:</span>
                <span className="ml-2">House, Apartment</span>
              </div>
              <div className="flex">
                <span className="text-gray-700">Parkings:</span>
                <span className="ml-2">2</span>
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-gray-700">Furnishing:</span>
                <span className="ml-2">Semifurnished</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[230px] w-[828px] bg-white ml-[111px] mt-8 flex items-center justify-center">
        <div className="w-full max-w-3xl  rounded-lg ">
          <div className="grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="">Rain Water Harvesting</div>
            <div className="">Indoor Games Room</div>
            <div className="">Barbeque pit</div>

            {/* Row 2 */}
            <div className="">Park</div>
            <div className="">Outdoor Tennis Court</div>
            <div className="">Visitors parking</div>

            {/* Row 3 */}
            <div className="">Internet/Wifi Connectivity</div>
            <div className="">Mini Cinema Theater </div>
            <div className="">Infinity Pool</div>
          </div>
        </div>
      </div>

      <div className="h-[446px] w-[827px] bg-white ml-[111px] mt-8">
        <h3 className="mt-5 ml-6 text-bold">Map</h3>
        <img
          className="ml-6 mt-5 h-[332px] w-[767px]"
          src="src/assets/Mask group.png"
          alt=""
        />
      </div>

      <div className="h-[373px] w-[827px] bg-white ml-[111px] mt-8">
        <h3 className="ml-6 mt-5 text-black text-bold">What's Nearby</h3>
        <p className="ml-6 mt-10 text-gray-500">
          Explore nearby amenities to precisely locate your property and
          identify surrounding conveniences, providing a comprehensive overview
          of the living environment and the property's convenience.
        </p>

        <div className="flex  gap-20 mt-10">
          <div className="flex flex-col space-y-2 text-left ml-6 mt-5">
            <div>School: 0.7km</div>
            <div>University: 1.3km</div>
            <div>Grocery Center: 0.6km</div>
            <div>Market: 1.1km</div>
          </div>

          <div className="flex flex-col space-y-2 text-left ml-6 mt-5">
            <div>School: 0.7km</div>
            <div>University: 1.3km</div>
            <div>Grocery Center: 0.6km</div>
          </div>
        </div>
      </div>

      <div className="h-[1293px] w-[827px]  ml-[111px]  mt-5 mx-auto p-4 bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="mb-4 mt-20">
            <div className="flex items-center mb-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < review.rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.048 2.927c.3-.921 1.654-.921 1.954 0l1.286 3.954a1 1 0 00.95.69h4.167c.969 0 1.372 1.24.588 1.81l-3.374 2.454a1 1 0 00-.364 1.118l1.287 3.955c.3.922-.755 1.688-1.54 1.118l-3.373-2.453a1 1 0 00-1.176 0l-3.373 2.453c-.784.57-1.838-.196-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.197 9.381c-.784-.57-.381-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.954z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Leave A Comment</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm  font-medium text-gray-700">
                Review
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your review"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                id="save-info"
                name="save-info"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="save-info"
                className="ml-2 block text-sm text-gray-900"
              >
                Save your name, email for the next time review
              </label>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="h-[567px] w-[1264px] bg-white ml-[111px] mt-5">
        <p className=" ml-6 mt-6 text-bold  ">Previously used property</p>

        <PropertyList />
      </div>
    </div>
  );
}

export default ProductDetail;
