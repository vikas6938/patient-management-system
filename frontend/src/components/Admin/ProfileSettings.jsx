// src/components/Admin/ProfileSettings.jsx
import React from 'react';
import user1 from "../../assets/images/userimg2.png";
import { FaUser, FaLock, FaFileAlt } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineEdit } from 'react-icons/ai'; // Importing the edit icon
import { Link } from 'react-router-dom';

const ProfileSettings = () => {
  return (
    <div className="relative p-16">
      {/* Gradient Background Header */}
      <div
        className="absolute top-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)',
        }}
      />

      {/* Profile Setting Title */}
      <div className="relative z-10 mb-8">
        <h1 className="text-3xl font-semibold text-white">Profile Setting</h1>
      </div>

      {/* Profile Content */}
      <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 flex" style={{ marginTop: '1rem' }}>
        {/* Left Side: Profile Picture */}
        <div className="flex flex-col items-center w-1/4 border-r pr-8">
          <div className="relative w-32 h-32 mb-4">
            <img src={user1} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <h3 className="text-lg font-medium">Lincoln Philips</h3>

          {/* Menu Items */}
          <nav className="w-full space-y-4 mt-4">
            <a href="#" className="flex items-center p-3 rounded-lg bg-gray-100 pro-text-color">
              <FaUser className="mr-3" />
              <span>Profile</span>
            </a>
            <a href="/changePass" className="flex items-center p-3 rounded-lg side-text-color bg-gray-100">
              <FaLock className="mr-3" />
              <span>Change Password</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg side-text-color bg-gray-100">
              <FaFileAlt className="mr-3" />
              <span>Terms & Condition</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg side-text-color bg-gray-100">
              <AiOutlineFileText className="mr-3" />
              <span>Privacy Policy</span>
            </a>
          </nav>
        </div>

        {/* Right Side: Editable Profile Form */}
        <div className="w-3/4 pl-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Profile</h3>
            {/* Edit Profile Button with Icon */}
            <Link to={'/edit-profile'} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              <AiOutlineEdit className="mr-2" />
              Edit Profile
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {/* First Name */}
            <div className="relative mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="Enter Name"
                 defaultValue="Marcus"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                First Name<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Last Name */}
            <div className="relative mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                 defaultValue="Philips"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Last Name<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                defaultValue="Philips@gmail.com"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Email<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Phone Number */}
            <div className="relative mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                defaultValue="9099940451"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Phone Number<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Hospital Name */}
            <div className="relative mb-4">
              <input
                type="text"
                name="hospitalName"
                placeholder="Enter Hospital Name"
                defaultValue="Silver Park Medical Center"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Hospital Name<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Gender */}
            <div className="relative mb-4">
              <input
                type="text"
                name="gender"
                placeholder="Enter Gender"
                defaultValue="Male"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Gender<span className="text-red-500">*</span>
              </label>
            </div>

            {/* City */}
            <div className="relative mb-4">
              <input
                type="text"
                name="city"
                placeholder="Enter City Name"
                defaultValue="Ahmedabad"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                City<span className="text-red-500">*</span>
              </label>
            </div>

            {/* State */}
            <div className="relative mb-4">
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                defaultValue="Gujarat"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                State<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Country */}
            <div className="relative mb-4">
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                defaultValue="India"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Country<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Other fields */}
            {/* Repeat similar structure for other fields like Height, Weight, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
