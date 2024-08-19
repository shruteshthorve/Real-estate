import React from 'react'



function Error() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-screen bg-gray-300 text-center">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-black mt-4">Oops! The page you're looking for doesn't exist.</p>
      
      <button className='bg-gray-800 text-white h-[37px] w-[200px] mt-7 rounded-md'>
        Back to homepage
      </button>
    </div>
  )
}

export default Error