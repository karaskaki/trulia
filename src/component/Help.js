import React from "react";
import BuyHome from "../Assets/BuyAHome.png";
import Neighborhoods from "../Assets/Neighborhoods.png";
import RentAHome from "../Assets/RentAHome (1).png";

const HeroSection = () => {
  return (
    <div className="bg-white pb-5">
      <div className="container mx-auto px-60">
        <h1 className="text-5xl font-semibold text-[#3B4144] text-center mb-8">
          See how Trulia can help
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img src={BuyHome} alt="BuyHome" className="size-24" />
            </div>
            <h3 className="text-gray-800 font-bold text-lg mb-2">Buy a home</h3>
            <p className="text-gray-600 text-center">
              With over 1 million+ homes for sale <br />
              available on the website, Trulia can
              <br /> match you with a house you will
              <br /> want to call home.
            </p>
            <button
              className={`
                text-base font-medium px-8 mt-5 py-2 rounded-md
                ${"bg-[#007882] text-white hover:bg-white border hover:border-[#007882] hover:text-[#007882]"}
                transition duration-150 ease-in-out
              `}
            >
              Find a home
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img src={RentAHome} alt="" className="size-24" />
            </div>
            <h3 className="text-gray-800 font-bold text-lg mb-2">
              Rent a home
            </h3>
            <p className="text-gray-600 text-center">
              With 35+ filters and custom <br />
              keyword search, Trulia can help
              <br /> you easily find a home or
              <br /> apartment for rent that you'll love.
            </p>
            <button
              className={`
                text-base font-medium px-8 mt-5 py-2 rounded-md
                ${"bg-[#007882] text-white hover:bg-white border hover:border-[#007882] hover:text-[#007882]"}
                transition duration-150 ease-in-out
              `}
            >
              Find a rental
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img src={Neighborhoods} alt="" className="size-24" />
            </div>
            <h3 className="text-gray-800 font-bold text-lg mb-2">
              See neighborhoods
            </h3>
            <p className="text-gray-600 text-center">
              With more neighborhood insights
              <br /> than any other real estate website
              <br />, we've captured the color and
              <br /> diversity of communities.
            </p>
            <button
              className={`
                text-base font-medium px-8 mt-5 py-2 rounded-md
                ${"bg-[#007882] text-white hover:bg-white border hover:border-[#007882] hover:text-[#007882]"}
                transition duration-150 ease-in-out
              `}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
