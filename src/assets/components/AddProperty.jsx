
import { MdOutlineDashboard } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAddBox } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function AddProperty() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    
    <>

<div className="flex items-center justify-between mt-5 ml-7">
  <h3 className="text-red-600 h-[37px] w-[133px] text-2xl font-bold">
    RealEstate
  </h3>
  <button className="h-[37px] w-[139px] bg-red-600 text-white mr-4 rounded-lg">
    Submit Property
  </button>
</div>


      < div className="flex flex-col lg:flex-row h-screen">
      
        <div className="lg:fixed lg:w-[267px] lg:h-screen bg-[#f1f1f1] text-black flex flex-col p-4 lg:py-6 mt-4">
        <div className="lg:hidden  flex justify-between items-center mb-4">
            
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <div className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <MdOutlineDashboard className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">Dashboards</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <FaHouseUser className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">My Properties</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <TbFileInvoice className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">My Invoices</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <FaRegHeart className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">My Favourites</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <MdOutlineMessage className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">Reviews</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <CgProfile className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">My Profile</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <MdOutlineAddBox className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">Add Property</span>
          </a>

          <a
            href="#"
            className="py-2 flex text-black hover:bg-red-200 hover:text-black hover:rounded-md"
          >
            <MdLogout className="opacity-50 mt-1.5 px-1" />
            <span className="font-semibold font-sans ml-2">Logout</span>
          </a>
        </div>
        </div>

        <div className="flex-grow flex flex-col p-4 lg:ml-[267px]">
          <div className="mb-4">
            <div className="w-full h-[71px] bg-red-200 rounded-t-md flex items-center px-10">
              <h1 className="font-bold">Property Gallery</h1>
            </div>
            <div className="w-full h-[228px] bg-white rounded-b-md shadow-md flex flex-col items-center justify-center">
              <BiImageAdd className="h-[54px] w-[54px]" />
              <button className="bg-red-700 text-white w-[144px] h-[45px] rounded-md mt-4">
                Choose Image
              </button>
              <span className="mt-2">Or drag image here to upload</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-full h-[71px] bg-red-200 rounded-t-md flex items-center px-10">
              <h1 className="font-bold">Property Basic Information</h1>
            </div>
            <div className="w-full lg:h-[440px] md:h-[440px] bg-white rounded-b-md shadow-md p-4 sm:h-[850px]">
              <div className="mb-4 mt-6">
                <h1 className="font-semibold">Property Title</h1>
                <input
                  type="text"
                  className="border border-gray-300 rounded py-2 px-4 w-full mt-6 h-[65px]"
                  placeholder="Property Title"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
                <div>
                  <h1 className="font-semibold">Status</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6 h-[62px]"
                    placeholder="Select an Option"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Type</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6 h-[62px]"
                    placeholder="Select an Option"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
                <div>
                  <h1 className="font-semibold">Price</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full h-[62px] mt-6"
                    placeholder="000                                 INR"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Area</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full h-[62px] mt-6"
                    placeholder="000                                sq.ft"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Rooms</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full h-[62px] mt-6"
                    placeholder="Select an Option"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-full h-[71px] bg-red-200 rounded-t-md flex items-center px-10">
              <h1 className="font-bold">Property Location</h1>
            </div>
            <div className=":w-full lg:h-[304px] sm:h-[500px] md:h-[304px] bg-white rounded-b-md shadow-md p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-7">
                <div>
                  <h1 className="font-semibold">Address</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">City Name</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="City Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
                <div>
                  <h1 className="font-semibold">State</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="State"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Zip Code</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="000000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-full h-[71px] bg-red-200 rounded-t-md flex items-center px-10">
              <h1 className="font-bold">Property Information</h1>
            </div>
            <div className="w-full lg:h-[554px] bg-white rounded-b-md shadow-md p-4 mt-7">
              <div className="mb-4 ">
                <h1 className="font-semibold">Property Description</h1>
                <input
                  type="text"
                  className="border border-gray-300 rounded py-2 px-4 w-full h-[168px] mt-6"
                  placeholder="Write Description here"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-7">
                <div>
                  <h1 className="font-semibold">Building Age</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="Select an Option"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Bath Rooms</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="Select an Option"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Bedrooms</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full mt-6"
                    placeholder="Select an Option"
                  />
                </div>
              </div>

              <div className="mt-7">
                <h1 className="font-semibold ">Other features(Optional)</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <input
                    type="checkbox"
                    className="form-radio mt-6"
                    name="Swimming Pool"
                    value="1"
                  />
                  <span className="opacity-55 font-semibold mt-6 px-3">
                    Air Conditioning
                  </span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="form-radio mt-6"
                    name="Swimming Pool"
                    value="1"
                  />
                  <span className="opacity-55 font-semibold mt-6 px-3">
                    Swimming Pool
                  </span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="form-radio mt-6"
                    name="Swimming Pool"
                    value="1"
                  />
                  <span className="opacity-55 font-semibold mt-6 px-3">
                    Central Heating{" "}
                  </span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="form-radio mt-6"
                    name="Swimming Pool"
                    value="1"
                  />
                  <span className="opacity-55 font-semibold mt-6 px-3">
                    Laundry Roomsl
                  </span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="form-radio mt-6"
                    name="Swimming Pool"
                    value="1"
                  />
                  <span className="opacity-55 font-semibold mt-6 px-3">
                    Gym
                  </span>
                </div>

                <div>
                  <input
                    type="checkbox"
                    className="form-radio mt-6"
                    name="Swimming Pool"
                    value="1"
                  />
                  <span className="opacity-55 font-semibold mt-6 px-3">
                    Window Covering
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-full h-[71px] bg-red-200 rounded-t-md flex items-center px-10">
              <h1 className="font-bold">Property Contact Detail</h1>
            </div>
            <div className="w-full lg:h-[170px]  bg-white rounded-b-md shadow-md p-4 ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
                <div>
                  <h1 className="font-semibold">Price</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full h-[62px] mt-6"
                    placeholder="000                                  INR"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Area</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full h-[62px] mt-6"
                    placeholder="000                                  sq.ft"
                  />
                </div>
                <div>
                  <h1 className="font-semibold">Rooms</h1>
                  <input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4 w-full h-[62px] mt-6"
                    placeholder="Select an Option"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-red-600 text-white w-full sm:w-[80%] md:w-[85%] lg:w-[90%] xl:w-[50%] 2xl:w-[40%] h-[45px] rounded-md mt-4 font-bold">
              Submit Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
}