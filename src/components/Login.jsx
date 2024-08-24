/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Login({ onSwitchToRegister }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-slate-100 rounded-3xl p-5 w-full max-w-lg">
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <button
            className="bg-red-500 rounded-md h-[37px] w-full md:w-[204px] text-white"
            onClick={onSwitchToRegister} // Switch back to Register form
          >
            Register
          </button>
          <button className="bg-red-500 rounded-md h-[37px] w-full md:w-[204px] text-white">Login</button>
        </div>

        <div className="mb-5">
          <h3 className="mb-2">Enter email address</h3>
          <input
            name="email"
            type="text"
            placeholder="Enter email"
            className="text-black h-[48px] w-full rounded-md mb-5"
          />

          <h3 className="mb-2">Enter your password</h3>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            className="text-black h-[48px] w-full rounded-md"
          />
        </div>

        <button className="bg-red-500 rounded-md h-[40px] w-full text-white mb-5">Login</button>
        <a href="#" className="block text-center text-blue-500 hover:text-red-600 mb-5">Forgot password?</a>

        <div className="h-[142px]">
          <button className="h-[48px] w-full rounded-md bg-white text-gray-700 text-center flex items-center justify-center mb-3">
            <FcGoogle className="mr-2" />
            Sign up with Google
          </button>

          <button className="h-[48px] w-full rounded-md bg-white text-gray-700 text-center flex items-center justify-center">
            <BiLogoFacebookCircle className="mr-2" />
            Sign up with Facebook
          </button>
        </div>

        <p className="text-center mt-5">
          // eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities
          Don't have an account?{' '}
          <a href="#" onClick={onSwitchToRegister} className="text-red-500 hover:text-blue-600">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
