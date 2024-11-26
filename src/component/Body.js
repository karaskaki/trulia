// import React from "react";
// import { IoIosSearch } from "react-icons/io";
// import SearchPage from "./handleDialog";

// const RealEstateSearch = () => {
//   const handleDialog = () => {
//     <SearchPage />;
//   };

//   return (
//     <div className="size-[11/12]">
//       <div className="relative">
//         <div className="px-4">
//           <img
//             src={require("../Assets/background (1).png")}
//             alt="background-image"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//           <h2 className="text-5xl font-bold font-sans mb-6">
//             Discover a place <br></br>you'll love to live
//           </h2>

//           <div className="rounded-lg p-8 max-w-4xl w-full">
//             <div className="flex flex-col items-center justify-center mb-8 space-y-4">
//               <div className="flex items-center space-x-0">
//                 <button className=" bg-white text-[#007882] font-bold py-3 px-12 rounded-lg text-lg">
//                   Buy
//                 </button>
//                 <button className="bg-blur hover:bg-white hover:text-[#007882] text-white font-bold py-3 px-12 rounded-lg text-lg">
//                   Rent
//                 </button>
//                 <button className="bg-blur hover:bg-white hover:text-[#007882] text-white font-bold py-3 px-12 rounded-lg text-lg">
//                   Sold
//                 </button>
//               </div>
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="San Francisco, CA"
//                   className="w-[600px] px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg "
//                   onClick={handleDialog}
//                 />
//                 <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-3 px-4 rounded absolute top-1/2 right-0 transform -translate-y-1/2 text-lg">
//                   <IoIosSearch className="text-white size-10" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealEstateSearch;

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchPage from "./handleDialog";

const RealEstateSearch = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const handleDialog = () => {
    setShowSearchPage(true);
  };

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
                  className="w-[600px] px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  onClick={handleDialog}
                />
                <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-3 px-4 rounded absolute top-1/2 right-0 transform -translate-y-1/2 text-lg">
                  <IoIosSearch className="text-white size-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally Render SearchPage */}
      {showSearchPage && <SearchPage />}
    </div>
  );
};

export default RealEstateSearch;
