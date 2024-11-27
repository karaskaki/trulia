import { useState } from "react";
import HamburgerComponent from "./Hamburger";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      label: "Buy",
      value: "buy",
      dropdownItems: [
        { title: "Calcutta" },
        { label: "Homes for Sale" },
        { label: "Open Houses" },
        { label: "New Homes" },
        { label: "Recently Sold" },
      ],
    },
    {
      label: "Rent",
      value: "rent",
      dropdownItems: [
        { title: "Calcutta" },
        { label: "All Rentals" },
        { label: "Apartments for Rent" },
        { label: "Houses for Rent" },
        { label: "Post A Rental Listing" },
      ],
    },
    {
      label: "Mortgage",
      value: "mortgage",
      dropdownItems: [
        { title: "Calcutta" },
        { label: "Mortgage Overview" },
        { label: "Get Pre-Qualified" },
        { label: "Mortgage Rates" },
        { label: "Refinance Rates" },
        { label: "Mortgage Calculator" },
        { label: "Affordability Calculator" },
        { label: "Refinance Calculator" },
        { label: "Rent vs Buy Calculator" },
      ],
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white shadow-md w-full font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Left Side: Logo and Main Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <a href="/" className="inline-flex items-center mr-6">
                <h1 className="text-2xl font-bold text-black">trulia</h1>
              </a>

              {/* Desktop Navigation - Main Tabs */}
              <nav className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <div
                    key={item.value}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.value)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`
                      text-base font-medium px-3 py-2 rounded-md
                      ${"text-black bg-white hover:bg-[#007882] hover:text-white"}
                      transition duration-150 ease-in-out
                    `}
                      onClick={() => setActiveTab(item.value)}
                    >
                      {item.label}
                    </button>

                    {openDropdown === item.value && (
                      <div className="absolute z-50 left-0 mt-2 w-60 bg-white shadow-lg rounded-md border border-gray-200 py-2">
                        {item.dropdownItems.map((dropItem, index) =>
                          dropItem.title ? (
                            <div
                              key={index}
                              className="px-4 py-2 font-bold text-gray-700 border-b"
                            >
                              {dropItem.title}
                            </div>
                          ) : (
                            <a
                              key={index}
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {dropItem.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Side: Saved Items and Sign Up */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Saved Navigation */}
              <nav className="flex space-x-6">
                <button
                  className={`
                      text-base font-medium px-3 py-2 rounded-md
                      ${"text-black bg-white hover:bg-[#007882] hover:text-white"}
                      transition duration-150 ease-in-out
                    `}
                >
                  Saved Homes
                </button>
                <button
                  className={`
                      text-base font-medium px-3 py-2 rounded-md
                      ${"text-black bg-white hover:bg-[#007882] hover:text-white"}
                      transition duration-150 ease-in-out
                    `}
                >
                  Saved Searches
                </button>
              </nav>

              {/* Sign Up / Log In Button */}
              <a
                href="/signup"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-gray-200"
              >
                Sign up or Log in
              </a>

              <HamburgerComponent />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
