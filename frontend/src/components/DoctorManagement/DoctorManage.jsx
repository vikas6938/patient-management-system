import React, { useState } from "react";
import Sidebar from "../ProfileScreen/Sidebar";
import BillingTopbar from "../Billing&Payment/BillingTopbar";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import ProfileImg from "../../assets/images/Invoice.png"; // Path to profile images

const DoctorManagement = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  // Sample doctor data
  const doctors = [
    { name: "Dr. Marcus Phillips", gender: "Male", qualification: "MBBS", specialty: "Internal Medicine", workingTime: "6 Hour", checkupTime: "4 Hour", breakTime: "1 Hour" },
    { name: "Dr. Haylie Schleifer", gender: "Female", qualification: "BDS", specialty: "Anesthesiology", workingTime: "5 Hour", checkupTime: "3 Hour", breakTime: "2 Hour" },
    { name: "Dr. Roger Carder", gender: "Male", qualification: "B.U.M.S", specialty: "Surgery", workingTime: "8 Hour", checkupTime: "6 Hour", breakTime: "2 Hour" },
    { name: "Dr. Wilson Culhane", gender: "Male", qualification: "BHMS", specialty: "Physical Therapy", workingTime: "7 Hour", checkupTime: "5 Hour", breakTime: "1 Hour" },
    { name: "Dr. Chance Vaccaro", gender: "Female", qualification: "BDS", specialty: "Pathology", workingTime: "6 Hour", checkupTime: "3 Hour", breakTime: "2 Hour" },
    { name: "Dr. Jaxon Levin", gender: "Male", qualification: "M.D", specialty: "Psychiatry", workingTime: "3 Hour", checkupTime: "2 Hour", breakTime: "1 Hour" }
  ];

  // Filtered list of doctors based on the search query
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <BillingTopbar breadcrumbItems={[{ label: "Doctor Management" }]} />
        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Heading, Search Bar, and Add Button in One Line */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">Doctor Management</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Patient"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md"
                  />
                  <MdSearch className="absolute top-2 left-3 text-gray-400 text-xl" />
                </div>
                <button
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  <FaPlus className="mr-2" />
                  Add New Doctor
                </button>
              </div>
            </div>

            {/* Doctor List Table */}
            <div className="overflow-x-auto rounded-lg bg-gray-50">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 border-b">
                  <tr className="text-gray-600 text-left">
                    <th className="p-4 font-medium">Doctor Name</th>
                    <th className="p-4 font-medium">Gender</th>
                    <th className="p-4 font-medium">Qualification</th>
                    <th className="p-4 font-medium">Specialty</th>
                    <th className="p-4 font-medium">Working Time</th>
                    <th className="p-4 font-medium">Patient Check Up Time</th>
                    <th className="p-4 font-medium">Break Time</th>
                    <th className="p-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDoctors.map((doctor, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-4 border-t flex items-center space-x-2">
                        <img src={ProfileImg} alt="Profile" className="w-8 h-8 rounded-full" />
                        <span>{doctor.name}</span>
                      </td>
                      <td className="p-4 border-t">{doctor.gender}</td>
                      <td className="p-4 border-t">{doctor.qualification}</td>
                      <td className="p-4 border-t">{doctor.specialty}</td>
                      <td className="p-4 border-t">{doctor.workingTime}</td>
                      <td className="p-4 border-t">{doctor.checkupTime}</td>
                      <td className="p-4 border-t">{doctor.breakTime}</td>
                      <td className="p-4 border-t flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEdit />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorManagement;
