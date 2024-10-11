import React, { useState } from "react";
import Sidebar from "../ProfileScreen/Sidebar";
import BillingTopbar from "../Billing&Payment/BillingTopbar";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdSearch } from "react-icons/md";
import ProfileImg from "../../assets/images/Invoice.png"; // Path to profile images

const DoctorManagement = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to hold selected doctor details for off-canvas
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // State to control off-canvas visibility

  // Sample doctor data
  const doctors = [
    {
      name: "Dr. Marcus Phillips",
      gender: "Male",
      qualification: "MBBS",
      specialty: "Internal Medicine",
      workingTime: "6 Hour",
      checkupTime: "4 Hour",
      breakTime: "1 Hour",
      yearsExperience: "10 Years",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      age: 54,
      phone: "+123456789",
      email: "marcus@example.com",
      address: "1234 Medical St, Hospital City, HC 56789",
      fees: "₹2,000"
    },
    // Add more sample data as needed
  ];

  // Function to open the off-canvas with selected doctor details
  const handleViewDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setIsOffCanvasOpen(true);
  };

  // Function to close the off-canvas
  const handleCloseOffCanvas = () => {
    setIsOffCanvasOpen(false);
    setSelectedDoctor(null);
  };

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
                <Link to="/add-doctor" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
                  <FaPlus className="mr-2" />
                  Add New Doctor
                </Link>
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
                        <button className="text-blue-500 hover:text-blue-700" onClick={() => handleViewDoctor(doctor)}>
                          <FaEye />
                        </button>
                        <button className="text-green-500 hover:text-green-700">
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

        {/* Off-Canvas Side Drawer */}
        {isOffCanvasOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
            <div className="bg-white w-96 p-6 overflow-auto">
              <button onClick={handleCloseOffCanvas} className="text-right text-gray-500 text-lg mb-4">
                &times;
              </button>
              <div className="flex items-center space-x-4 mb-4">
                <img src={ProfileImg} alt="Doctor" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">{selectedDoctor?.name}</h3>
                  <span className="text-sm text-blue-500 font-semibold bg-blue-100 px-2 py-1 rounded">{selectedDoctor?.gender}</span>
                </div>
              </div>
              <hr className="my-2" />
              <div className="mb-4">
                <p><strong>Qualification:</strong> {selectedDoctor?.qualification}</p>
                <p><strong>Years of Experience:</strong> {selectedDoctor?.yearsExperience}</p>
                <p><strong>Specialty Type:</strong> {selectedDoctor?.specialty}</p>
                <p><strong>Working Time:</strong> {selectedDoctor?.workingTime}</p>
                <p><strong>Checkup Time:</strong> {selectedDoctor?.checkupTime}</p>
                <p><strong>Break Time:</strong> {selectedDoctor?.breakTime}</p>
                <p><strong>Consultation Fees:</strong> {selectedDoctor?.fees}</p>
              </div>
              <div className="mb-4">
                <p><strong>Description:</strong></p>
                <p className="text-gray-600">{selectedDoctor?.description}</p>
              </div>
              <hr className="my-2" />
              <div className="text-gray-700 space-y-2">
                <p><strong>Age:</strong> {selectedDoctor?.age} Years</p>
                <p><strong>Phone:</strong> {selectedDoctor?.phone}</p>
                <p><strong>Email:</strong> {selectedDoctor?.email}</p>
                <p><strong>Address:</strong> {selectedDoctor?.address}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorManagement;
