// src/components/Dashboard/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./DashTopbar";
import Sidebar from "../ProfileScreen/Sidebar";


const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4">
            {['Total Patients', 'Total Doctors', 'Today’s Appointments'].map((title, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500">{title}</h3>
                  <p className="text-2xl font-semibold">1000</p>
                </div>
                <div className="text-4xl text-gray-300">
                  {title === 'Total Patients' ? '👥' : title === 'Total Doctors' ? '🧑‍⚕️' : '📅'}
                </div>
              </div>
            ))}
            {/* Billing & Payments Card */}
            <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Billing & Payments</h3>
                <p className="text-red-500">Pending Bills : 50</p>
              </div>
              <Link to="/create-bills" className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Create Bills
              </Link>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-3 gap-6">
            {/* Patients Statistics */}
            <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Patients Statistics</h3>
              <div className="border-b border-gray-200 mb-4">
                <div className="flex space-x-4">
                  {['Year', 'Month', 'Week'].map((period, idx) => (
                    <button key={idx} className="text-gray-600 hover:text-blue-500">
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 bg-gray-50 flex items-center justify-center">
                {/* Placeholder for the chart */}
                <p>No Data Available</p>
              </div>
            </div>

            {/* Billing & Payments with Details */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold">Billing & Payments</h3>
              <p className="text-red-500 mb-2">Pending Bills: 50</p>
              <div className="overflow-y-auto h-32">
                {/* Billing Details Table */}
                <table className="min-w-full text-left text-gray-700">
                  <thead>
                    <tr>
                      <th>Bill No</th>
                      <th>Patient Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['Paid', 'Unpaid', 'Paid', 'Unpaid'].map((status, idx) => (
                      <tr key={idx}>
                        <td>5645</td>
                        <td>John Doe</td>
                        <td className={`text-${status === 'Paid' ? 'green' : 'red'}-500`}>{status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Today's Appointments */}
            <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Today's Appointments List</h3>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="flex flex-col border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600">Patient: Jane Doe</p>
                    <p className="text-sm text-gray-400">10:00 AM - 12:00 PM</p>
                    <p className="text-sm text-green-500">Status: Onsite</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Patients Summary */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Patients Summary</h3>
              <div className="flex items-center justify-center h-32">
                {/* Placeholder for pie chart */}
                <p>Total Patients: 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
