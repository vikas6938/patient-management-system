// src/components/Admin/Sidebar.jsx
import React from 'react';
import logo from "../../assets/images/logo.png";
import { FaUser, FaSignOutAlt, FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-6">
      <div className="mb-8 flex items-center">
      <img src={logo} alt="Logo" className="mb-4 mx-auto w-40 h-30" />
      </div>
      <nav className="space-y-4">
        <a href="/dashboard" className="flex items-center space-x-2 text-gray-700 side-text-color">
          <FaUser />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 side-text-color">
          <FaUser />
          <span>Doctor Management</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 side-text-color">
          <FaUser />
          <span>Patient Management</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 side-text-color">
          <FaFileAlt />
          <span>Billing and Payments</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 side-text-color">
          <FaFileAlt />
          <span>Reporting and Analytics</span>
        </a>
      </nav>
      <div className="absolute bottom-6">
        <a href="#" className="flex items-center space-x-2 text-red-600">
          <FaSignOutAlt />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
