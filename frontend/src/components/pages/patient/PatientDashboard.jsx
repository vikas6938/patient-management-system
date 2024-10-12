import React from "react";
import Sidebar from "../../Patient/PatientSidebar";
import Topbar from "../../Patient/PatientNavbar";
import PatientDetails from "../../Patient/PatientDetails";
import PrescriptionList from "../../Patient/PrescriptionList";
import TestReports from "../../Patient/TestReports";
import PatientStatus from "../../Patient/PatientStatus";
import MedicalHistory from "../../Patient/MedicalHistory";

const PatientDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ">
        <Topbar />
        <div className="flex flex-col h-screen p-6">
          {/* Patient Details at the top */}
          <PatientDetails />

          {/* Grid Layout for Medical History, Prescriptions, Test Reports, and Patient Status */}
          <div className="grid grid-cols-8 gap-6 flex-1">
            {/* Left Column: Medical History */}
            <div className="col-span-5 flex flex-col">
              <MedicalHistory className="flex-1 h-full" />
            </div>

            {/* Right Column: Prescriptions */}
            <div className="col-span-3 flex flex-col">
              <PrescriptionList className="flex-1 h-full" />
            </div>
          </div>

          {/* Second row for Test Reports and Patient Status */}
          <div className="grid grid-cols-8 gap-6 flex-1 mt-6">
            {/* Test Reports */}
            <div className="col-span-5 flex flex-col">
              <TestReports className="flex-1 h-full" />
            </div>

            {/* Patient Status */}
            <div className="col-span-3 flex flex-col">
              <PatientStatus className="flex-1 h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
