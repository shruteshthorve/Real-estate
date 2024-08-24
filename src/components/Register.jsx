// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Login from './Login'; // Make sure the path is correct

const Register = () => {
  const [showLogin, setShowLogin] = useState(false); // State to toggle forms
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleRegister = () => {
    setShowLogin(false);
  };

  if (showLogin) {
    return <Login onSwitchToRegister={handleRegister} />; // Render Login component with prop to switch back to Register
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-10 py-10">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between gap-4 mt-6">
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-white text-custom-red py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-custom-red text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Register
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <select
              id="userType"
              name="userType"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="r" className="text-neutral-900">Owner/Buyer</option>
              <option value="owner" className="text-neutral-900">Owner</option>
              <option value="buyer" className="text-neutral-900">Buyer</option>
            </select>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              placeholder='Mobile Number'
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              placeholder='Password'
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              placeholder='Confirm Password'
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
              By creating an account, you agree to our{' '}
              <a href="/terms" className="text-red-500">Terms & Conditions</a> and{' '}
              <a href="/privacy" className="text-red-500">Privacy Policy</a>.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-custom-red text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account? <a href="#" onClick={handleLogin} className="text-red-500">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
