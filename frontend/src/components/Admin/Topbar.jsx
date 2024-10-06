// src/components/Admin/Topbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import user1 from "../../assets/images/user1.png";
import { FaUser, FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Profile Setting Path */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full space-x-2">
        <FaUser className="text-gray-500" />
        <AiOutlineRight className="text-gray-400" />

        <Link to="/profile-setting" className="pro-text-color font-medium">
          Profile Setting
        </Link>
      </div>

      {/* <div>
        <h1 className="text-2xl font-bold">Good Morning! Martin</h1>
        <p>Hope you have a good day</p>
      </div> */}

      {/* Right Side - Search, Notification, and Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar with Icon */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Quick Search"
            className="bg-gray-100 focus:outline-none w-full"
          />
          <AiOutlineDown className="text-gray-500" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="text-gray-500" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img src={user1} alt="user1" className="w-8 h-8 rounded-full" />
          <div>
            <span className="font-semibold">Lincoln Philips</span>
            <span className="block text-gray-500 text-sm">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
