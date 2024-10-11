import React, { useState } from "react";
import Sidebar from "../ProfileScreen/Sidebar";
import BillingTopbar from "../Billing&Payment/BillingTopbar";
import { FaUpload } from "react-icons/fa";

const AddNewDoctor = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    doctorName: "",
    qualification: "",
    gender: "",
    specialtyType: "",
    workOn: "",
    checkupTime: "",
    workingTime: "",
    breakTime: "",
    experience: "",
    phoneNumber: "",
    country: "",
    zipCode: "",
    consultationRate: "",
    hospitalName: "",
    hospitalAddress: "",
    email: "",
    age: "",
    description: "",
    currentHospital: "",
    websiteLink: "",
    emergencyContact: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [signatureImage, setSignatureImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo({ ...doctorInfo, [name]: value });
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSignatureUpload = (e) => {
    if (e.target.files[0]) {
      setSignatureImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", doctorInfo);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <BillingTopbar breadcrumbItems={[{ label: "Add new Doctor" }]} />
        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-md mx-auto ">
            <h3 className="text-2xl font-semibold mb-6">Add New Doctor</h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Profile Image and Signature Upload */}
              <div className="col-span-1 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Doctor" className="object-cover w-full h-full" />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">Choose Photo</span>
                    </div>
                  )}
                </div>
                <input type="file" onChange={handleImageUpload} className="text-center mb-2" />
                <p className="text-blue-500">Upload a file PNG up to 5MB</p>

                {/* Signature Upload */}
                <div className="w-full mt-6 p-4 border-dashed border-2 border-gray-300 rounded-lg text-center">
                  <input type="file" onChange={handleSignatureUpload} className="hidden" id="signatureUpload" />
                  <label htmlFor="signatureUpload" className="cursor-pointer inline-block ">
                    <FaUpload className="text-gray-400 text-3xl mb-2 ms-12" />
                    {signatureImage ? (
                      <img src={signatureImage} alt="Signature" className="object-cover w-full h-full" />
                    ) : (
                      <>
                        <p className="text-blue-500 font-semibold">Upload Signature</p>
                        <p className="text-gray-500">PNG Up To 5MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Doctor Information Form */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="doctorName"
                  placeholder="Doctor Name"
                  value={doctorInfo.doctorName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="qualification"
                  placeholder="Doctor Qualification"
                  value={doctorInfo.qualification}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <select
                  name="gender"
                  value={doctorInfo.gender}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="specialtyType"
                  placeholder="Specialty Type"
                  value={doctorInfo.specialtyType}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="checkupTime"
                  placeholder="Check Up Time"
                  value={doctorInfo.checkupTime}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <select
                  name="workOn"
                  value={doctorInfo.workOn}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Work On</option>
                  <option value="Online">Online</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Both">Both</option>
                </select>
                <select
                  name="country"
                  value={doctorInfo.country}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={doctorInfo.state}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={doctorInfo.zipCode}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="doctorAddress"
                  placeholder="Doctor Address"
                  value={doctorInfo.doctorAddress}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="consultationRate"
                  placeholder="Online Consultation Rate"
                  value={doctorInfo.consultationRate}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={doctorInfo.description}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-md col-span-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
              <input
                type="text"
                name="currentHospital"
                placeholder="Doctor Current Hospital"
                value={doctorInfo.currentHospital}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="hospitalName"
                placeholder="Hospital Name"
                value={doctorInfo.hospitalName}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="hospitalAddress"
                placeholder="Hospital Address"
                value={doctorInfo.hospitalAddress}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="websiteLink"
                placeholder="Hospital Website Link"
                value={doctorInfo.websiteLink}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="emergencyContact"
                placeholder="Emergency Contact Number"
                value={doctorInfo.emergencyContact}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewDoctor;
