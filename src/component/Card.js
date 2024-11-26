import React from "react";

const Card = ({ price, beds, baths, sqft, address, image }) => {
  return (
    <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-md p-4">
      <div className="h-40 w-full bg-gray-200 rounded mb-4">
        <img src={image} alt="" />
      </div>
      <h3 className="text-xl font-semibold mb-2">${price}</h3>
      <p className="text-sm text-gray-600">
        {beds} bd | {baths} ba | {sqft} sqft
      </p>
      <p className="text-sm text-gray-500 mt-2">{address}</p>
    </div>
  );
};

export default Card;
