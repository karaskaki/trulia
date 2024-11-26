import React, { useState } from "react";

const SearchPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Input Box */}
      <input
        type="text"
        placeholder="Search for City, Neighborhood, Zip, County"
        className="px-4 py-2 border rounded-lg w-[300px] focus:ring focus:outline-none"
        onClick={() => setIsDialogOpen(true)} // Open dialog on click
      />

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="absolute top-20 bg-white shadow-lg rounded-lg w-[90%] max-w-[500px] p-4 z-50">
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
              className="text-blue-600 font-semibold"
              onClick={() => setIsDialogOpen(false)} // Close dialog on click
            >
              Cancel
            </button>
          </div>

          {/* Dialog Options */}
          <div className="space-y-3">
            <div className="flex items-center">
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
                  d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
                />
              </svg>
              <span className="ml-2">Current Location</span>
            </div>
            <div className="flex items-center">
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
                  d="M21 12l-8.5-8.5m8.5 8.5L12 21m9-9H3"
                />
              </svg>
              <span className="ml-2">Search by commute time</span>
            </div>
          </div>

          {/* Recent Searches */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              Recent Searches
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
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
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
                  />
                </svg>
                <div className="ml-2">
                  <p>San Francisco, CA</p>
                  <p className="text-sm text-gray-500">
                    City • Single Family Home
                  </p>
                </div>
              </li>
              <li className="flex items-center">
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
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
                  />
                </svg>
                <div className="ml-2">
                  <p>Calcutta, IN</p>
                  <p className="text-sm text-gray-500">City</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsDialogOpen(false)} // Close when clicking outside
        ></div>
      )}
    </div>
  );
};

export default SearchPage;
