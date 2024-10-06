// src/components/Admin/Dashboard.jsx
import React from "react";
import AdFrame2 from "../../assets/images/AdFrame2.png";
import AdFrame1 from "../../assets/images/AdFrame1.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaUser, FaClipboardList, FaMoneyBillWave, FaChartBar, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample data for the line chart
const data = [
  { name: 'Jan', patients: 30 },
  { name: 'Feb', patients: 45 },
  { name: 'Mar', patients: 20 },
  { name: 'Apr', patients: 60 },
  { name: 'May', patients: 50 },
  { name: 'Jun', patients: 70 },
  { name: 'Jul', patients: 80 },
  { name: 'Aug', patients: 90 },
  { name: 'Sep', patients: 65 },
  { name: 'Oct', patients: 55 },
  { name: 'Nov', patients: 40 },
  { name: 'Dec', patients: 75 },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Dashboard Content */}
      <div className="flex-1 p-1 bg-gray-100">
        <div className="grid grid-cols-10 gap-4">
          {/* The first part will take 7/10 (70%) of the screen */}
          <div className="col-span-6">
            {/* Dashboard Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-gray-700">Total Patients</h3>
                <p className="text-3xl font-bold">00</p>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-gray-700">Total Doctors</h3>
                <p className="text-3xl font-bold">00</p>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-gray-700">Today's Appointments</h3>
                <p className="text-3xl font-bold">00</p>
              </div>
            </section>

            {/* Patients Statistics */}
            <section className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-lg font-semibold">Patients Statistics</h3>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="patients" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>

          {/* The second part will take 3/10 (30%) of the screen */}
          <div className="col-span-4 bg-white p-6 shadow-md rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Billing & Payments</h3>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Create Bills
              </button>
            </div>
            <p className="mt-4 text-red-500">Pending Bills: 00</p>
            <div className="flex justify-center mt-4">
              <img
                src={AdFrame1}
                alt="Billing Illustration"
                className="w-75 h-75 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Dashboard Sections */}
        <section className="grid grid-cols-10 gap-4 mt-4">
          {/* Today's Appointments List - will take 6/10 (60%) of the space */}
          <div className="col-span-6 bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">Today's Appointments List</h3>
            <div className="flex justify-center items-center h-45">
              <img src={AdFrame2} alt="Appointments Illustration" className="w-33 h-33 object-contain" />
            </div>
          </div>

          {/* Total Patients Summary - Circular Design */}
          <div className="col-span-4 bg-white p-6 shadow-md rounded-lg flex items-center justify-center">
            <div className="relative flex items-center justify-center me-8">
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-gray-300 flex items-center justify-center">
                  <p className="text-xl font-bold text-blue-500">00</p>
                </div>
                <div className="absolute inset-1/4 rounded-full border-8 border-gray-100 flex items-center justify-center">
                  <span className="text-gray-500">Total Patients</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="text-yellow-500">New Patients: 0</p>
              <p className="text-green-500">Old Patients: 0</p>
              <p className="text-blue-500">Total Patients: 0</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
