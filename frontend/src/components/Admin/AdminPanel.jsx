import React from 'react';
import Sidebar from './Sidebar';
import Topbar_ProfileSetting from './Topbar_ProfileSetting';
import Topbar_AdminDashboard from './Topbar_AdminDashboard';
import { Outlet, useLocation } from 'react-router-dom';  // Import Outlet and useLocation for routing

const AdminPanel = () => {
  const location = useLocation();  // Get the current location


  const getTopbar = () => {
    if (location.pathname == '/profile-setting') {
      return <Topbar_ProfileSetting />;
    } else if (location.pathname === '/dashboard') {
      return <Topbar_AdminDashboard />;
    }
    return null;  // Default case if no match
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        {/* Render the appropriate topbar based on the route */}
        {getTopbar()}

        {/* Outlet will render the nested components */}
        <main className='flex-1 bg-gray-100 p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
