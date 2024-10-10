// src/components/Billing&Payment/CreateBill.jsx
import React, { useState } from 'react';
import Sidebar from "../ProfileScreen/Sidebar";
import BillingTopbar from '../Billing&Payment/BillingTopbar';
import { FaPlus } from 'react-icons/fa';

const CreateBill = () => {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: '',
    otherText: '',
    email: '',
    billDate: '',
    billTime: '',
    billNumber: '',
    phoneNumber: '',
    address: '',
  });

  const [patientDetails, setPatientDetails] = useState({
    name: '',
    diseaseName: '',
    doctorName: '',
    description: '',
    discount: '',
    tax: '',
    amount: '',
    totalAmount: '',
    paymentType: '',
    age: '',
    gender: '',
    address: '',
  });

  const handleInputChange = (section, field, value) => {
    if (section === 'hospital') {
      setHospitalDetails({ ...hospitalDetails, [field]: value });
    } else {
      setPatientDetails({ ...patientDetails, [field]: value });
    }
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Billing And Payments', path: '/Billing&Payment' },
    { label: 'Create Bill', path: '/CreateBill' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <BillingTopbar breadcrumbItems={breadcrumbItems} />
        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h3 className="text-2xl font-semibold mb-6">Create Bill</h3>
            
            {/* Hospital Details Section */}
            <div className='border p-4'>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Hospital Details</h4>
                <button className="flex items-center space-x-2 text-blue-500">
                  <FaPlus />
                  <span>Add New Field</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Upload Logo</label>
                  <input type="file" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'name', e.target.value)} />
                <input type="text" placeholder="Other Text" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'otherText', e.target.value)} />
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'email', e.target.value)} />
                <input type="date" placeholder="Bill Date" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'billDate', e.target.value)} />
                <input type="time" placeholder="Bill Time" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'billTime', e.target.value)} />
                <input type="text" placeholder="Bill Number" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'billNumber', e.target.value)} />
                <input type="text" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'phoneNumber', e.target.value)} />
                <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('hospital', 'address', e.target.value)} />
              </div>
            </div>

            {/* Patient Details Section */}
            <div className='border p-4'>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Patient Details</h4>
                <button className="flex items-center space-x-2 text-blue-500">
                  <FaPlus />
                  <span>Add New Field</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'name', e.target.value)} />
                <input type="text" placeholder="Disease Name" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'diseaseName', e.target.value)} />
                <input type="text" placeholder="Doctor Name" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'doctorName', e.target.value)} />
                <input type="text" placeholder="Description" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'description', e.target.value)} />
                <input type="text" placeholder="Discount (%)" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'discount', e.target.value)} />
                <input type="text" placeholder="Tax" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'tax', e.target.value)} />
                <input type="text" placeholder="Amount" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'amount', e.target.value)} />
                <input type="text" placeholder="Total Amount" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'totalAmount', e.target.value)} />
                <select className="w-full p-2 border border-gray-300 rounded-md" 
                  onChange={(e) => handleInputChange('patient', 'paymentType', e.target.value)}>
                  <option>Select Payment Type</option>
                  <option>Cash</option>
                  <option>Credit Card</option>
                  <option>Insurance</option>
                </select>
                <input type="text" placeholder="Age" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'age', e.target.value)} />
                <select className="w-full p-2 border border-gray-300 rounded-md" 
                  onChange={(e) => handleInputChange('patient', 'gender', e.target.value)}>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleInputChange('patient', 'address', e.target.value)} />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBill;
