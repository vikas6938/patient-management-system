// src/components/Admin/ProfileSettings.jsx
import React, { useState } from 'react';
import user1 from "../../assets/images/userimg2.png";
import { FaUser, FaLock, FaFileAlt, FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for visibility
import { AiOutlineFileText } from 'react-icons/ai'; // Importing the edit icon

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState(user1); // Set the default profile image
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false); // For toggling current password visibility
  const [showNewPassword, setShowNewPassword] = useState(false); // For toggling new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For toggling confirm password visibility

  // Function to handle password change submission
  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert('Password changed successfully!');
      // Add your password change logic here
    }
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

          <nav className="w-full space-y-4 mt-4">
            <a href="/profile-setting" className="flex items-center p-3 rounded-lg bg-gray-100 pro-text-color">
              <FaUser className="mr-3" />
              <span>Profile</span>
            </a>
            <a href="/changePass" className="flex items-center p-3 rounded-lg side-text-color bg-gray-100">
              <FaLock className="mr-3" />
              <span>Change Password</span>
            </a>
            <a href="/termsCondition" className="flex items-center p-2 rounded-lg side-text-color bg-gray-100">
              <FaFileAlt className="mr-3" />
              <span>Terms & Condition</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg side-text-color bg-gray-100">
              <AiOutlineFileText className="mr-3" />
              <span>Privacy Policy</span>
            </a>
          </nav>
        </div>

        {/* Right Side: Conditional Rendering for Change Password */}
        <div className="w-3/4 pl-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Change Password</h3>
            <p className="text-gray-500 mt-2">
              To change your password, please fill in the fields below. Your password must contain at least 8 characters and include one uppercase letter, one lowercase letter, one number, and one special character.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Current Password */}
            <div className="relative mb-4">
              <input
                type={showCurrentPassword ? "text" : "password"} // Toggle between text and password
                name="currentPassword"
                placeholder="Enter Current Password"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Current Password
              </label>
              {/* Visibility toggle button */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* New Password */}
            <div className="relative mb-4">
              <input
                type={showNewPassword ? "text" : "password"} // Toggle between text and password
                name="newPassword"
                placeholder="Enter New Password"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                New Password
              </label>
              {/* Visibility toggle button */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              />
              <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3">
                Confirm Password
              </label>
              {/* Visibility toggle button */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button onClick={handlePasswordChange} className="px-6 py-2 rounded bg-blue-500 text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
