// src/components/Dashboard/Topbar.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import user1 from "../../assets/images/user1.png";

const Topbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Greeting Section */}
      <div className="text-left">
        <h2 className="text-xl font-semibold text-gray-800">Good Morning! Martin</h2>
        <p className="text-sm text-gray-400">Hope you have a good day</p>
      </div>

      {/* Right Section - Search, Notification, and User Info */}
      <div className="flex items-center space-x-4">
        {/* Search Bar with Dropdown */}
        <div className="relative flex items-center bg-gray-100 rounded-full w-64 pr-4">
          <FaSearch className="absolute top-2 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Quick Search"
            className="w-full py-2 pl-10 pr-2 rounded-full bg-gray-100 text-gray-600 focus:outline-none"
          />
          {/* Dropdown Button */}
          <div className="relative">
            <button
              className="flex items-center text-gray-400 ml-2 focus:outline-none"
              onClick={toggleDropdown}
            >
              {selectedOption}
              <FaChevronDown className="ml-1" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <ul className="py-1 text-gray-700">
                  {["All", "Doctor", "Patient"].map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Notification Icon */}
        <FaBell className="text-gray-400 text-xl hover:text-gray-600 cursor-pointer" />

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img src={user1} alt="User Profile" className="w-8 h-8 rounded-full" />
          <div className="text-right">
            <span className="block text-gray-700 font-semibold">Lincoln Philips</span>
            <Link to="/profile-setting" className="block text-sm text-gray-400 text-start">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
