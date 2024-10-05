// src/components/Admin/PrivacyPolicy.jsx
import React from 'react';
import user1 from "../../assets/images/userimg2.png";
import { FaUser, FaLock, FaFileAlt } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

const PrivacyPolicy = () => {
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
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
      </div>

      {/* Profile Content */}
      <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 flex" style={{ marginTop: '1rem' }}>
        {/* Left Side: Profile Picture */}
        <div className="flex flex-col items-center w-1/4 border-r pr-8">
          <div className="relative w-32 h-32 mb-4">
            <img src={user1} alt="Profile" className="w-full h-full rounded-full object-cover" />
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
            <a href="/terms" className="flex items-center p-3 rounded-lg bg-gray-100 side-text-color">
              <FaFileAlt className="mr-3" />
              <span>Terms & Condition</span>
            </a>
            <a href="/privacy" className="flex items-center p-2 rounded-lg bg-gray-100 side-text-color">
              <AiOutlineFileText className="mr-3" />
              <span>Privacy Policy</span>
            </a>
          </nav>
        </div>

        {/* Right Side: Privacy Policy Content with Scrollbar */}
        <div className="w-3/4 pl-8 h-96 overflow-y-auto"> {/* Added fixed height and scrollbar */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Privacy Policy</h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce at augue arcu. Suspendisse sodales et dui laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.
              <br /><br />
              Pellentesque sit amet interdum sapien. Fusce at augue arcu. Suspendisse sodales et dui laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros. Nullam vehicula lacus sit amet metus pharetra bibendum.
              <br /><br />
              Nunc pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce at augue arcu. Suspendisse sodales et dui laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
