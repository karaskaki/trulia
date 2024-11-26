// App.js
import React from "react";
import Card from "./Card";
import { homes } from "./mockData";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 mt-20 text-[#3B4144] flex items-center justify-center">
        Newly listed homes in San Francisco
      </h1>
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hidden p-4"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        {homes.map((home, index) => (
          <Card
            key={index}
            price={home.price}
            beds={home.beds}
            baths={home.baths}
            sqft={home.sqft}
            address={home.address}
            image={home.img}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
