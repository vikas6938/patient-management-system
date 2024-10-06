import React, { useState } from 'react';
import Topbar_ProfileSetting from './Topbar_ProfileSetting';  // Import the topbar
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Icons for visibility toggling

const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);  // Toggle current password visibility
  const [showNewPassword, setShowNewPassword] = useState(false);  // Toggle new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);  // Toggle confirm password visibility

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert('Password changed successfully!');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (if needed) */}
      {/* <Sidebar /> Uncomment if sidebar is required */}
      
      <div className="flex-1">
        {/* Topbar with Profile Setting Links */}
        <Topbar_ProfileSetting />  {/* Same topbar as in AdminPanel */}

        <div className="p-16">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Change Password</h3>
            <div className="grid grid-cols-1 gap-6">
              {/* Current Password */}
              <div className="relative mb-4">
                <input
                  type={showCurrentPassword ? "text" : "password"}  // Toggle between text and password
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
                  type={showNewPassword ? "text" : "password"}  // Toggle between text and password
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
                  type={showConfirmPassword ? "text" : "password"}  // Toggle between text and password
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
    </div>
  );
};

export default ChangePassword;
