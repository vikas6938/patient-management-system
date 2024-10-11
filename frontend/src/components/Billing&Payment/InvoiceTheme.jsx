import React, { useState } from 'react';
import Sidebar from "../ProfileScreen/Sidebar";
import BillingTopbar from '../Billing&Payment/BillingTopbar';

const SelectInvoiceTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    {
      id: 1,
      title: "Theme 1",
      description: "Simple and Professional",
      preview: "Theme 1 preview here",
      price: 1251,
    },
    {
      id: 2,
      title: "Theme 2",
      description: "Elegant and Stylish",
      preview: "Theme 2 preview here",
      price: 2140,
    },
    {
      id: 3,
      title: "Theme 3",
      description: "Clean and Modern",
      preview: "Theme 3 preview here",
      price: 2240,
    },
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Billing And Payments', path: '/BillingAndPayment' },
    { label: 'Monitor Billing', path: '/SelectInvoiceTheme' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64 ">
        <BillingTopbar breadcrumbItems={breadcrumbItems} />
        <div className="p-6 rounded-lg shadow-md m-6">
        <h3 className="text-2xl font-semibold mb-6">Select Invoice Theme</h3>
          <div className="grid grid-cols-3 gap-6">
         
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`p-6 rounded-lg shadow-md ${
                  selectedTheme === theme.id ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <h4 className="text-xl font-semibold mb-2">{theme.title}</h4>
                <p className="text-gray-600 mb-4">{theme.description}</p>
                <div className="mb-4 h-40 bg-gray-200 flex items-center justify-center">
                  {/* Replace this div with actual image preview */}
                  <span>{theme.preview}</span>
                </div>
                <button
                  className={`w-full py-2 text-white rounded-md ${
                    selectedTheme === theme.id ? "select-btn" : "bg-gray-300"
                  }`}
                  onClick={() => setSelectedTheme(theme.id)}
                >
                  {selectedTheme === theme.id ? "Selected" : "Choose Template"}
                </button>
              </div>
            ))}
          </div>
          {/* <div className="mt-6">
            {selectedTheme ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Selected Theme</h4>
                <p className="text-gray-700 mb-2">
                  {themes.find((theme) => theme.id === selectedTheme).description}
                </p>
                <p className="text-lg font-semibold">
                  Price: ₹{themes.find((theme) => theme.id === selectedTheme).price}
                </p>
              </div>
            ) : (
              <p className="text-gray-600">Please select an invoice theme to see the details.</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectInvoiceTheme;
