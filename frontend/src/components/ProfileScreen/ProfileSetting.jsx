// src/components/Dashboard/ProfileSetting.jsx
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import user2 from "../../assets/images/userimg2.png";

const ProfileSetting = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <div className="">
          {/* Profile Settings Header */}
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
                  className="flex items-center p-2 rounded-lg bg-blue-100 pro-text-color font-semibold"
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
                  href="/change-pass"
                  className="flex items-center p-2 rounded-lg bg-gray-100 text-gray-700"
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

            {/* Right Section - Profile Form */}
            <div className="w-3/4 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">Profile</h3>
                <Link
                  to="/edit-profile"
                  className="border text-white edit-btn px-4 py-1 rounded-lg font-medium"
                >
                  Edit Profile
                </Link>
              </div>

              <form className="grid grid-cols-3 gap-4">
                {[
                  "First Name",
                  "Last Name",
                  "Email Address",
                  "Phone Number",
                  "Hospital Name",
                  "Gender",
                  "City",
                  "State",
                  "Country",
                ].map((field, index) => (
                  <div key={index} className="relative mb-4">
                    <input
                      type="text"
                      id={field.replace(/\s+/g, "-").toLowerCase()}
                      name={field.replace(/\s+/g, "-").toLowerCase()}
                      className={`peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 ${
                        index === 0 ? "border-gray-300" : ""
                      }`}
                      placeholder={`Enter ${field}`}
                      defaultValue={
                        field === "First Name"
                          ? "Lincoln"
                          : field === "Last Name"
                          ? "Philips"
                          : field === "Email Address"
                          ? "lincoln@gmail.com"
                          : field === "Phone Number"
                          ? "99130 53222"
                          : field === "Hospital Name"
                          ? "Silver Park Medical Center"
                          : field === "Gender"
                          ? "Male"
                          : field === "City"
                          ? "Ahmedabad"
                          : field === "State"
                          ? "Gujarat"
                          : field === "Country"
                          ? "India"
                          : ""
                      }
                    />
                    <label
                      htmlFor={field.replace(/\s+/g, "-").toLowerCase()}
                      className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3"
                    >
                      {field} <span className="text-red-500">*</span>
                    </label>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
