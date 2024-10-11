// src/components/Dashboard/Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "./DashTopbar";
import Sidebar from "../ProfileScreen/Sidebar";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Legend,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  Line,
  XAxis,
} from "recharts";
import AdFrame1 from "../../assets/images/AdFrame1.png";
import AdFrame2 from "../../assets/images/AdFrame2.png";

const data = [
  { name: "New Patients", value: 35, color: "#FFA41B" },
  { name: "Old Patients", value: 65, color: "#50C878" },
  { name: "Total Patients", value: 100, color: "#4682B4" },
];

const dataYear = [
  { month: "Jan", patients: 12000 },
  { month: "Feb", patients: 18000 },
  { month: "Mar", patients: 15000 },
  { month: "Apr", patients: 21000 },
  { month: "May", patients: 25000 },
  { month: "Jun", patients: 26780 },
  { month: "Jul", patients: 23000 },
  { month: "Aug", patients: 26000 },
  { month: "Sep", patients: 22000 },
  { month: "Oct", patients: 29000 },
  { month: "Nov", patients: 30000 },
  { month: "Dec", patients: 35000 },
];


const dataMonth = [
  { day: "1", patients: 1000 },
  { day: "2", patients: 1500 },
  { day: "3", patients: 1200 },
  { day: "4", patients: 1300 },
  { day: "5", patients: 1400 },
  { day: "6", patients: 1250 },
  { day: "7", patients: 1600 },
  { day: "8", patients: 1400 },
  { day: "9", patients: 1100 },
  { day: "10", patients: 1350 },
  // Continue adding data for all days of the month
];

const dataWeek = [
  { day: "Mon", patients: 3000 },
  { day: "Tue", patients: 3200 },
  { day: "Wed", patients: 2800 },
  { day: "Thu", patients: 3100 },
  { day: "Fri", patients: 3500 },
  { day: "Sat", patients: 3300 },
  { day: "Sun", patients: 2900 },
];

// Define the doctorsData array here
const doctorsData = [
  {
    name: "Dr. Parthiv Patel",
    gender: "Male",
    qualification: "MBBS",
    specialty: "Internal Medicine",
    workingTime: "6 Hour",
    checkupTime: "4 Hour",
    breakTime: "1 Hour",
  },
  {
    name: "Dr. Parthiv Patel",
    gender: "Male",
    qualification: "BDS",
    specialty: "Anesthesiology",
    workingTime: "5 Hour",
    checkupTime: "4 Hour",
    breakTime: "2 Hour",
  },
];

const patientsData = [
  {
    patientName: "Julianna Maddox",
    issue: "Feeling Tired",
    doctor: "Dr. Titan Grant",
    disease: "Blood Pressure",
    time: "5:00 AM",
    type: "Onsite",
  },
  {
    patientName: "Julianna Mejia",
    issue: "Fever",
    doctor: "Dr. Keenan Tucker",
    disease: "Viral Infection",
    time: "4:30 PM",
    type: "Online",
  },
  {
    patientName: "Julianna Warren",
    issue: "Headache",
    doctor: "Dr. Ari Bullock",
    disease: "Headache",
    time: "6:00 AM",
    type: "Onsite",
  },
  {
    patientName: "Julianna Estes",
    issue: "Fever",
    doctor: "Dr. Bryleigh Terrell",
    disease: "Viral Infection",
    time: "7:30 PM",
    type: "Online",
  },
];

const Dashboard = () => {
  const [view, setView] = useState("Year");
  const [showYearView, setShowYearView] = useState(true);
  const [filterOption, setFilterOption] = useState("");

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  const chartData = view === "Year" ? dataYear : view === "Month" ? dataMonth : dataWeek;
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar onFilterChange={handleFilterChange} />
        <div className="p-6 space-y-6">
          {/* Render based on filter option */}
          {filterOption === "Doctor" ? (
            // Doctor View
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Search Results</h3>
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600">
                    <th className="p-3">Doctor Name</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Qualification</th>
                    <th className="p-3">Specialty</th>
                    <th className="p-3">Working Time</th>
                    <th className="p-3">Patient Check-Up Time</th>
                    <th className="p-3">Break Time</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorsData.map((doctor, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 flex items-center">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="doctor"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        {doctor.name}
                      </td>
                      <td className="p-3">{doctor.gender}</td>
                      <td className="p-3">{doctor.qualification}</td>
                      <td className="p-3">{doctor.specialty}</td>
                      <td className="p-3 text-blue-500">
                        {doctor.workingTime}
                      </td>
                      <td className="p-3 text-blue-500">
                        {doctor.checkupTime}
                      </td>
                      <td className="p-3 text-blue-500">{doctor.breakTime}</td>
                      <td className="p-3 flex space-x-2">
                        <button className="text-green-500">🖊️</button>
                        <button className="text-blue-500">🔍</button>
                        <button className="text-red-500">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : filterOption === "Patient" ? (
            // Patient View
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Patients Search Results
              </h3>
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600">
                    <th className="p-3">Patient Name</th>
                    <th className="p-3">Patient Issue</th>
                    <th className="p-3">Doctor Name</th>
                    <th className="p-3">Disease Name</th>
                    <th className="p-3">Appointment Time</th>
                    <th className="p-3">Appointment Type</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patientsData.map((patient, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 flex items-center">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="patient"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        {patient.patientName}
                      </td>
                      <td className="p-3">{patient.issue}</td>
                      <td className="p-3">{patient.doctor}</td>
                      <td className="p-3">{patient.disease}</td>
                      <td className="p-3 text-blue-500">{patient.time}</td>
                      <td
                        className={`p-3 ${
                          patient.type === "Onsite"
                            ? "text-blue-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {patient.type}
                      </td>
                      <td className="p-3">
                        <button className="text-blue-500">🔍</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Default Dashboard View
            <>
              <h3 className="text-lg font-semibold mb-2">{filterOption}</h3>

              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4">
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
                      <p className="text-2xl font-semibold">1000</p>
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
                {/* Billing & Payments Card */}
                <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Billing & Payments
                    </h3>
                    <p className="text-red-500">Pending Bills : 50</p>
                  </div>
                  <Link
                    to="/create-bills"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    Create Bills
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Patients Statistics */}
                <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Patients Statistics
                  </h3>
                  <div className="border-b border-gray-200 mb-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setShowYearView(true)}
                        className={
                          showYearView
                            ? "bg-blue-500 text-white px-3 py-1 rounded-full"
                            : "text-gray-600 hover:text-blue-500"
                        }
                      >
                        Year
                      </button>
                      <button
                        onClick={() => setShowYearView(false)}
                        className={
                          !showYearView
                            ? "bg-blue-500 text-white px-3 py-1 rounded-full"
                            : "text-gray-600 hover:text-blue-500"
                        }
                      >
                        Month
                      </button>
                      <button
                  onClick={() => setView("Week")}
                  className={
                    view === "Week"
                      ? "bg-blue-500 text-white px-3 py-1 rounded-full"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  Week
                </button>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={view === "Year" ? "month" : "day"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold">Billing & Payments</h3>
                  <p className="text-red-500 mb-2">Pending Bills: 50</p>
                  <div className="overflow-y-auto h-32">
                    <table className="min-w-full text-left text-gray-700">
                      <thead>
                        <tr>
                          <th>Bill No</th>
                          <th>Patient Name</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: 5645, name: "John Doe", status: "Paid" },
                          { id: 5646, name: "Jane Smith", status: "Unpaid" },
                        ].map((bill, idx) => (
                          <tr key={idx}>
                            <td>{bill.id}</td>
                            <td>{bill.name}</td>
                            <td
                              className={
                                bill.status === "Paid"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }
                            >
                              {bill.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Today's Appointments */}
                <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    Today's Appointments List
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "Roger Lubin",
                        doctor: "Leo Geidt",
                        disease: "Meningococcal Disease",
                        time: "10:00 AM",
                        status: "Onsite",
                      },
                      {
                        name: "Jakob Korsgaard",
                        doctor: "Leo Geidt",
                        disease: "Meningococcal Disease",
                        time: "10:00 AM",
                        status: "Online",
                      },
                      {
                        name: "Roger Lubin",
                        doctor: "Leo Geidt",
                        disease: "Meningococcal Disease",
                        time: "10:00 AM",
                        status: "Onsite",
                      },
                    ].map((appointment, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 shadow-sm"
                      >
                        <p className="font-semibold text-gray-700">
                          {appointment.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Doctor: {appointment.doctor}
                        </p>
                        <p className="text-sm text-gray-500">
                          Disease: {appointment.disease}
                        </p>
                        <p className="text-sm text-gray-500">
                          Time: {appointment.time}
                        </p>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            appointment.status === "Onsite"
                              ? "bg-blue-100 text-blue-500"
                              : "bg-yellow-100 text-yellow-500"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patients Summary */}
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    Patients Summary
                  </h3>
                  <div className="flex justify-center items-center">
                    <PieChart width={200} height={200}>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                    <div className="ml-6 text-left">
                      {data.map((entry, index) => (
                        <p
                          key={`text-${index}`}
                          className="flex items-center mb-2"
                        >
                          <span
                            className="w-4 h-4 inline-block mr-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                          ></span>
                          {entry.name}:{" "}
                          <span className="font-semibold ml-2">
                            {entry.value}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
