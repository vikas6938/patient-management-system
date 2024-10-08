// src/components/Dashboard/Sidebar.jsx
import React from 'react';
import { FaUserMd, FaUserCog, FaMoneyBill, FaChartLine, FaSignOutAlt, FaThLarge } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/AdmLogo.png";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-full shadow-lg fixed flex flex-col justify-between">
      {/* Logo and Title */}
      <div>
        <div className="p-5 text-center shadow">
        <img src={logo} alt="Logo" className=" mx-auto w-60 h-30" />
        </div>
        
        {/* Navigation Links */}
        <nav className="space-y-4 mt-4">
          <Link to="/dashboard" className="flex items-center py-3 px-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600">
            <FaThLarge className="mr-3" />
            Dashboard
          </Link>
          <Link to="/doctor-management" className="flex items-center py-3 px-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600">
            <FaUserMd className="mr-3" />
            Doctor Management
          </Link>
          <Link to="/patient-management" className="flex items-center py-3 px-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600">
            <FaUserCog className="mr-3" />
            Patient Management
          </Link>
          <Link to="/billing" className="flex items-center py-3 px-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600">
            <FaMoneyBill className="mr-3" />
            Billing And Payments
          </Link>
          <Link to="/analytics" className="flex items-center py-3 px-6 text-gray-600 hover:bg-blue-100 hover:text-blue-600">
            <FaChartLine className="mr-3" />
            Reporting And Analytics
          </Link>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="w-full py-4">
        <Link to="/logout" className="flex items-center justify-center text-red-500 hover:text-red-700 py-2">
          <FaSignOutAlt className="mr-2" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
