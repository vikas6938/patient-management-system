// src/components/Admin/AdminPanel.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';  // Import Outlet for nested routing

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        {/* Outlet will render the nested components */}
        <main className='flex-1 bg-gray-100 p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
