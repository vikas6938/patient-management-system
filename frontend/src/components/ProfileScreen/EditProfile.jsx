// src/components/Dashboard/ProfileSetting.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import user2 from "../../assets/images/userimg2.png";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(true); // Start in edit mode for testing
  const fileInputRef = React.useRef();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileChange = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

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
              <img src={user2} alt="Profile" className="w-28 h-28 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Lincoln Philips</h3>

              <button
                onClick={handleProfileChange}
                className="mt-4 bg-gray-100 p-2 rounded-md font-medium flex items-center justify-center mx-auto">
                <span className="mr-2">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                    <path d="M8 12l-2 2H4v-2L12 4l2 2L8 12z" />
                    <path fillRule="evenodd" d="M12.586 2.586a2 2 0 112.828 2.828L10.414 10l-2-2L12.586 2.586z" clipRule="evenodd" />
                  </svg>
                </span>
                Change Profile
              </button>
              {/* Hidden file input for changing profile picture */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            {/* Right Section - Profile Form */}
            <div className="w-3/4 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">{isEditing ? "Edit Profile" : "Profile"}</h3>
              </div>

              <form className="grid grid-cols-3 gap-4">
                {['First Name', 'Last Name', 'Email Address', 'Phone Number', 'Hospital Name', 'Gender', 'City', 'State', 'Country'].map((field, index) => (
                  <div key={index} className="relative mb-4">
                    {isEditing ? (
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        defaultValue={
                          field === 'First Name' ? 'Lincoln' :
                          field === 'Last Name' ? 'Philips' :
                          field === 'Email Address' ? 'lincoln@gmail.com' :
                          field === 'Phone Number' ? '99130 53222' :
                          field === 'Hospital Name' ? 'Silver Park Medical Center' :
                          field === 'Gender' ? 'Male' :
                          field === 'City' ? 'Ahmedabad' :
                          field === 'State' ? 'Gujarat' :
                          field === 'Country' ? 'India' : ''
                        }
                      >
                        <option>{field}</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        defaultValue={
                          field === 'First Name' ? 'Lincoln' :
                          field === 'Last Name' ? 'Philips' :
                          field === 'Email Address' ? 'lincoln@gmail.com' :
                          field === 'Phone Number' ? '99130 53222' :
                          field === 'Hospital Name' ? 'Silver Park Medical Center' :
                          field === 'Gender' ? 'Male' :
                          field === 'City' ? 'Ahmedabad' :
                          field === 'State' ? 'Gujarat' :
                          field === 'Country' ? 'India' : ''
                        }
                        disabled={!isEditing}
                      />
                    )}
                    <label className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200">
                      {field} <span className="text-red-500">*</span>
                    </label>
                  </div>
                ))}
              </form>

              {isEditing && (
                <div className="flex justify-end space-x-4 mt-4">
                  <button onClick={toggleEdit} className="px-6 py-2 border border-gray-300 rounded-md font-medium">
                    Cancel
                  </button>
                  <button onClick={toggleEdit} className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium">
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
