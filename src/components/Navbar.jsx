import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-1 px-2 md:px-8 bg-white shadow-md relative">
      <h1 className="text-xl md:text-2xl font-bold text-red-600">RealEstate</h1>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
        </button>
      </div>

      {/* Navbar Links */}
     <ul
  className={`${
    isOpen ? 'block' : 'hidden'
  } md:flex md:items-center md:justify-center md:space-x-5 text-sm md:text-base text-black absolute top-full left-0 w-full bg-white md:bg-transparent md:relative md:top-0 z-10`}
>
  <li className="py-2 px-4 md:py-0"><a href="#buy">Buy</a></li>
  <li className="py-2 px-4 md:py-0"><a href="#sell">Sell</a></li>
  <li className="py-2 px-4 md:py-0"><a href="#rent">Rent</a></li>
  <li className="py-2 px-4 md:py-0"><a href="#dashboard">Dashboard</a></li>
</ul>


      {/* Action Buttons */}
      <div className="hidden md:flex space-x-2 md:space-x-4">
        <button className="bg-white border-2 border-red-500 px-3 md:px-4 py-1 rounded-lg md:rounded-xl text-xs md:text-base text-red-600">
          Login/Register
        </button>
        <button className="bg-red-600  px-3 md:px-6 py-1 rounded-lg md:rounded-xl text-xs md:text-base text-white">
          Submit Property
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
