import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../ProfileScreen/Sidebar";
import { FaEye } from "react-icons/fa";
import BillingTopbar from '../Billing&Payment/BillingTopbar';

const pendingBillsData = Array(24).fill({
  billNo: '5654',
  billDate: '2 Jan, 2022',
  patientName: 'Haylie Schleifer',
  phoneNumber: '85759 58421',
});

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Billing And Payments', path: '/Billing&Payment' },
  { label: 'Monitor Billing', path: '/PendingBills' },
];

const PendingBills = () => {
  const [showYearView, setShowYearView] = useState(true);
  const [filterOption, setFilterOption] = useState("All");

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <BillingTopbar onFilterChange={handleFilterChange} breadcrumbItems={breadcrumbItems || []} />
        <div className="p-6 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Pending Bills (50)</h3>
            <div className="h-96 overflow-y-auto">
              <div className="grid grid-cols-4 gap-4">
                {pendingBillsData.map((bill, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50 hover:bg-white transition">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-700 font-semibold">
                        Bill No: <Link to={`/Pending/${bill.billNo}`} className="text-blue-500">{bill.billNo}</Link>
                      </p>
                      <FaEye className="text-blue-500 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Bill Date</div>
                      <p className="font-semibold text-gray-800">{bill.billDate}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm text-gray-500">Patient Name</div>
                      <p className="font-semibold text-gray-800">{bill.patientName}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm text-gray-500">Phone Number</div>
                      <p className="font-semibold text-gray-800">{bill.phoneNumber}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingBills;
