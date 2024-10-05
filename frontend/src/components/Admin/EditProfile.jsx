// src/components/Admin/ProfileSettings.jsx
import React, { useState } from 'react';
import user1 from "../../assets/images/userimg2.png";
import { FaUser, FaLock, FaFileAlt, FaCamera } from 'react-icons/fa'; // Importing the camera icon for changing profile picture
import { AiOutlineFileText, AiOutlineEdit } from 'react-icons/ai'; // Importing the edit icon

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState(user1); // Set the default profile image

  // Function to handle file upload for changing profile picture
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle save button
  const handleSave = () => {
    alert('Profile saved successfully!');
    // Add your save logic here
  };

  // Function to handle cancel button
  const handleCancel = () => {
    alert('Profile changes canceled!');
    // Add your cancel logic here
  };

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
            <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>

          {/* Change Profile Button */}
          <div className="flex flex-col items-center mt-2 p-2 rounded-lg bg-gray-100">
            <label htmlFor="profileImage" className="flex items-center text-blue-500 cursor-pointer">
              <FaCamera className="mr-2" />
              Change Profile
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleProfileChange}
              className="hidden" // Hiding the file input
            />
          </div>
        </div>

        {/* Right Side: Editable Profile Form */}
        <div className="w-3/4 pl-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Edit Profile</h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* First Name */}
            <div className="relative mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="Enter Name"
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
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Country<span className="text-red-500">*</span>
              </label>
            </div>

            {/* Other fields */}
            {/* Repeat similar structure for other fields like Height, Weight, etc. */}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={handleCancel}
              className="px-6 py-2 rounded bg-gray-200 text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded save-btn text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
