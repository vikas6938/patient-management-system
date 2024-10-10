// src/components/Common/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Billing And Payments', path: '/Billing&Payment' },
  { label: 'Monitor Billing', path: '/PendingBills' },
] || [];

const Breadcrumb = ({ items }) => {
  return (
    <div className="bg-gray-100 p-2 rounded-md flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <Link to={item.path} className={index === items.length - 1 ? "text-blue-500" : "text-gray-500 hover:text-blue-500"}>
            {item.label}
          </Link>
          {index < items.length - 1 && <span className="mx-1 text-gray-400">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
