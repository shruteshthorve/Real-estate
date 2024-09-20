import React, { useState } from "react";

function Search() {
  const [activeTab, setActiveTab] = useState("rent");
  const [value, setValue] = useState(0);

  return (
    <div className="bg-white h-[1086px] w-[321px] ">
      <p className="text-black">Search</p>
      <div className="flex border h-[52px] w-[237px] mt-4 border-gray-300 rounded-full overflow-hidden">
        <button
          className={`px-4 py-2 w-[136.5px] font-semibold transition-colors duration-300 ${
            activeTab === "rent"
              ? "bg-red-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("rent")}
        >
          For Rent
        </button>
        <button
          className={`px-4 py-2 w-[136.5px] font-semibold transition-colors duration-300 ${
            activeTab === "sale"
              ? "bg-red-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("sale")}
        >
          For Sale
        </button>
      </div>

      <p className="mt-4">Keyword</p>

      <input
        type="text"
        placeholder="Search Keywords"
        className="border border-gray-300  py-2 px-4 h-[46px] w-[273px] mt-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      ></input>

      <p className="mt-4">Location</p>

      <input
        type="text"
        placeholder="Search Keywords"
        className="border border-gray-300  py-2 px-4 h-[46px] w-[273px] mt-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      ></input>

      <p className="mt-4">Type</p>

      <select className="border border-gray-300 h-[46px] w-[273px] py-2 px-4 focus:outline-none focus:ring-2 focus:red-500">
        <option value="all" className="mt-4">
          All
        </option>
      </select>

      <p className="mt-4">Rooms</p>

      <select className="border border-gray-300 h-[46px] w-[273px] py-2 px-4 focus:outline-none focus:ring-2 focus:red-red-500">
        <option value="1" className="mt-4">
          1
        </option>
      </select>

      <p className="mt-4">Bathrooms</p>

      <select className="border border-gray-300 h-[46px] w-[273px] py-2 px-4 focus:outline-none focus:ring-2 focus:red-500">
        <option value="all" className="mt-4">
          All
        </option>
      </select>

      <p className="mt-4">Bedrooms</p>

      <select className="border border-gray-300 h-[46px] w-[273px] py-2 px-4 focus:outline-none focus:ring-2 focus:red-500">
        <option value="all" className="mt-4">
          All
        </option>
      </select>

      <div className="flex flex-col ">
        <p className="mt-4">Range</p>
        <input
          type="range"
          min="0"
          max="50000"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[273px] mt-4 h-2 bg-red-500 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className="mt-2 text-red-500 font-semibold">{value}</div>
      </div>

      <div className="flex flex-col ">
        <p className="mt-4">Security Deposit</p>
        <input
          type="range"
          min="0"
          max="50000"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[273px] mt-4 h-2 bg-red-500 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className="mt-2 text-red-500 font-semibold">{value}</div>
      </div>

      <button className=" h-[48px] w-[273px] text-white bg-red-500 mt-10 rounded-md">
        Find Properties
      </button>
    </div>
  );
}

export default Search;
