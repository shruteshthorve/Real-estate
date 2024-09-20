import React from 'react'

function ContactCard() {
  return (
    <div className="flex justify-center items-center h-[603px] w-[321px] mt-5">
    <div className="w-full max-w-sm p-4 bg-white border-2 border-blue-500 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <img
          src="src\assets\Ellipse 81.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold">Anil Pore</h2>
        <p className="text-gray-600">+91 9075326686</p>
        <p className="text-gray-600">anilpore@gmail.com</p>
      </div>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700">Full Name:</label>
          <input
            type="text"
            placeholder="Enter here"
            className="w[273px] h-[37] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="text"
            placeholder="+91"
            className="w[273px] h-[37] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address:</label>
          <input
            type="email"
            placeholder="Enter here"
            className="w[273px] h-[37] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Your Message:</label>
          <textarea
            placeholder="Message"
            className="w[273px] h-[73] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w[273px] h-[43]px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>





  )
}

export default ContactCard