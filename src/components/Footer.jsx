import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-8">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">RealEstate</h2>
          <p className="mb-4">
            Specializes in providing high-class tours for those in need. Contact us.
          </p>
          <p>Lane No. 3, Balajinagar, Mahadev Nagar, Kharadi</p>
          <p>+91 9075236686</p>
          <p>realestate@gmail.com</p>
          <p className="mt-4 text-sm">©2024 RealEstate. All Rights Reserved.</p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Pricing Plans</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Property For Sale</a></li>
            <li><a href="#" className="hover:underline">Property For Rent</a></li>
            <li><a href="#" className="hover:underline">Property For Buy</a></li>
            <li><a href="#" className="hover:underline">Our Agents</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Follow us:</h3>
          <div className="flex flex-wrap items-center space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-xl hover:text-red-600 transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-xl hover:text-red-600 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-xl hover:text-red-600 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-xl hover:text-red-600 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 mb-4 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0">
          <a href="#" className="hover:underline">Terms Of Services</a>
          <span className="mx-2 hidden md:inline-block">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="mx-2 hidden md:inline-block">|</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
