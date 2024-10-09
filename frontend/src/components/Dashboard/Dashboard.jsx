// src/components/Dashboard/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./DashTopbar";
import Sidebar from "../ProfileScreen/Sidebar";
import AdFrame1 from "../../assets/images/AdFrame1.png";
import AdFrame2 from "../../assets/images/AdFrame2.png";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <div className="p-6 space-y-6">
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-3 gap-6 ">
            <div className="col-span-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4 mb-3">
                {[
                  "Total Patients",
                  "Total Doctors",
                  "Today’s Appointments",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-gray-500">{title}</h3>
                      <p className="text-2xl font-semibold">00</p>
                    </div>
                    <div className="text-4xl text-gray-300">
                      {title === "Total Patients"
                        ? "👥"
                        : title === "Total Doctors"
                        ? "🧑‍⚕️"
                        : "📅"}
                    </div>
                  </div>
                ))}
              </div>
               {/* Main Dashboard Content */}
          <div className="grid grid-cols-2 ">
            {/* Patients Statistics */}
            <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold ">Patients Statistics</h3>
              <div className="border-b border-gray-200 ">
                <div className="flex space-x-4">
                  {['Year', 'Month', 'Week'].map((period, idx) => (
                    <button key={idx} className="text-gray-600 hover:text-blue-500">
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 bg-gray-50 flex items-center justify-center">
                <p>No Data Available</p>
              </div>
            </div>
            </div>
            </div>

            {/* Billing & Payments */}
            <div className=" rounded-lg text-center">
                <div className="bg-white shadow-md p-6  rounded-lg">
              <div className="   flex justify-between items-center ">
                <div>
                  <h3 className="text-lg font-semibold mb-6">Billing & Payments</h3>
                  <h3 className="text-sm text-start font-semibold mb-6">Pending Bills : 00</h3>
                </div>
                <Link
                  to="/create-bills"
                  className="create-btn text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Create Bills
                </Link>
              </div>
              <div className="p-6 text-center">
                <img src={AdFrame1} alt="Logo" className=" mx-auto w-60 h-30" />
              </div>
            </div>
            </div>
            {/* Today's Appointments */}
            <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Today's Appointments List
              </h3>
              <div className="h-48 flex items-center justify-center">
              <div className="p-6 text-center">
                <img src={AdFrame2} alt="Logo" className=" mx-auto w-40 h-30" />
              </div>
               
              </div>
            </div>
            {/* Patient Stats */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Patient Stats</h3>
              <div className="flex items-center justify-center h-32">
                {/* Replace with a pie chart or graph */}
                <p>Total Patients: 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
