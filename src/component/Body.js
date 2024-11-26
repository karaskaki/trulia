import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Navigation, Car } from "lucide-react";

const RealEstateSearch = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="size-[11/12]">
      {/* Background and Search UI */}
      <div className="relative">
        <div className="px-4">
          <img
            src={require("../Assets/background (1).png")}
            alt="background-image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-5xl font-bold font-sans mb-6">
            Discover a place <br /> you'll love to live
          </h2>

          <div className="rounded-lg p-8 max-w-4xl w-full">
            <div className="flex flex-col items-center justify-center mb-8 space-y-4">
              {/* Buttons for Buy, Rent, Sold */}
              <div className="flex items-center space-x-0">
                <button className="bg-white text-[#007882] font-bold py-3 px-12 rounded-lg text-lg">
                  Buy
                </button>
                <button className="bg-blur hover:bg-white hover:text-[#007882] text-white font-bold py-3 px-12 rounded-lg text-lg">
                  Rent
                </button>
                <button className="bg-blur hover:bg-white hover:text-[#007882] text-white font-bold py-3 px-12 rounded-lg text-lg">
                  Sold
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="San Francisco, CA"
                  className="w-[600px] px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007882] text-lg"
                  onClick={() => setIsDialogOpen(true)}
                />

                <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-3 px-4 rounded absolute top-1/2 right-0 transform -translate-y-1/2 text-lg">
                  <IoIosSearch className="text-white size-10" />
                </button>

                {/* Conditionally Render SearchPage */}
                {/* Dialog Box */}
                {isDialogOpen && (
                  <div className="absolute top-0 bg-white shadow-lg rounded-md w-[600px] p-4 z-50">
                    {/* Search Input in Dialog */}
                    <div className="flex items-center border-b pb-2 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search for City, Neighborhood, Zip, County"
                        className="ml-2 flex-1 focus:outline-none"
                      />
                      <button
                        className="text-[#007882] font-semibold"
                        onClick={() => setIsDialogOpen(false)} // Close dialog on click
                      >
                        Cancel
                      </button>
                    </div>

                    {/* Dialog Options */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-teal-600 space-x-2">
                        <Navigation className="w-5 h-5" />
                        <span className="font-medium">Current Location</span>
                      </div>

                      <div className="flex items-center text-teal-600 space-x-2">
                        <Car className="w-5 h-5" />
                        <span className="font-medium">
                          Search by commute time
                        </span>
                      </div>
                    </div>

                    {/* Recent Searches */}
                    <div>
                      <h3 className="text-gray-500 mb-3">Recent Searches</h3>

                      <div className="mb-4">
                        <div className="flex items-start">
                          <div className="text-gray-400 mr-3 mt-1">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-sans text-gray-600">
                              San Francisco, CA
                            </div>
                            <div className="text-sm text-gray-500">
                              City • Single Family Home
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start">
                          <div className="text-gray-400 mr-3 mt-1">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-sans text-gray-600">
                              Calcutta, IN
                            </div>
                            <div className="text-sm text-gray-500">City</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isDialogOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={() => setIsDialogOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default RealEstateSearch;
