// src/components/Dashboard/ChangePassword.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import user2 from "../../assets/images/userimg2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <div className="">
          {/* Change Password Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-900 p-20 text-white">
            <h2 className="text-4xl font-semibold mb-4">Profile Setting</h2>
          </div>
          {/* Profile Content */}
          <div className="bg-white shadow-md rounded-lg flex mx-20 -mt-20">
            {/* Left Section - Profile Picture and Menu */}
            <div className="w-1/4 border-r p-6 text-center">
              <img
                src={user2}
                alt="Profile"
                className="w-28 h-28 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Lincoln Philips</h3>

              {/* Navigation Links */}
              <div className="mt-8 space-y-3">
                <h6 className="text-l font-semibold text-start">Menu</h6>
                <a
                  href="/profile-setting"
                  className="flex items-center p-2 rounded-lg bg-gray-100 text-gray-700"
                >
                  <span className="inline-block w-5 h-5 mr-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                    >
                      <path d="M12 12a5 5 0 11-10 0 5 5 0 0110 0zm5-4a2 2 0 10-4 0 2 2 0 004 0z" />
                    </svg>
                  </span>
                  Profile
                </a>

                <a
                  href="/terms-condition"
                  className="flex items-center p-2 rounded-lg bg-blue-100 pro-text-color font-semibold"
                >
                  <span className="inline-block w-5 h-5 mr-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                    >
                      <path d="M12 4.5V2a2 2 0 00-4 0v2.5a1 1 0 01-2 0V2a4 4 0 118 0v2.5a1 1 0 01-2 0zM8 13V9.5a3 3 0 016 0V13a2 2 0 012 2v3.5a1.5 1.5 0 11-3 0V17a2 2 0 00-4 0v1.5a1.5 1.5 0 11-3 0V15a2 2 0 012-2z" />
                    </svg>
                  </span>
                  Change Password
                </a>
                <a
                  href="/terms-condition"
                  className="flex items-center p-2 rounded-lg bg-gray-100 text-gray-700"
                >
                  <span className="inline-block w-5 h-5 mr-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                    >
                      <path d="M5 3a2 2 0 00-2 2v1h1V5a1 1 0 011-1h10a1 1 0 011 1v1h1V5a2 2 0 00-2-2H5z" />
                    </svg>
                  </span>
                  Terms & Condition
                </a>
                <a
                  href="/privacy-policy"
                  className="flex items-center p-2 rounded-lg bg-gray-100 text-gray-700"
                >
                  <span className="inline-block w-5 h-5 mr-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                    >
                      <path d="M9 4a3 3 0 10-6 0 3 3 0 006 0zM18 14a6 6 0 10-12 0 6 6 0 0012 0z" />
                    </svg>
                  </span>
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="w-2/4 p-6">
              <div className=" justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">Change Password</h3>
                <p className="text-sm">
                  To change your password, please fill in the fields below. Your
                  password must contain at least 8 characters, it must also
                  include at least one uppercase letter, one lowercase letter,
                  one number, and one special character.
                </p>
              </div>
              <form className="space-y-6">
                {/* Current Password */}
                <div className="relative">
                  <input
                    type={showPassword.current ? "text" : "password"}
                    placeholder="Enter Current Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200">
                    Current Password <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={() => togglePasswordVisibility("current")}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showPassword.current ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                {/* New Password */}
                <div className="relative">
                  <input
                    type={showPassword.new ? "text" : "password"}
                    placeholder="Enter New Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200">
                    New Password <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showPassword.new ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showPassword.confirm ? "text" : "password"}
                    placeholder="Enter Confirm Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    {showPassword.confirm ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-200"
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
