import React, { useState } from "react";
import Sidebar from "../ProfileScreen/Sidebar";
import BillingTopbar from "../Billing&Payment/BillingTopbar";
import { FaPlus } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

const CreateBill = () => {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: "",
    otherText: "",
    email: "",
    billDate: "",
    billTime: "",
    billNumber: "",
    phoneNumber: "",
    address: "",
  });

  const [patientDetails, setPatientDetails] = useState({
    name: "",
    diseaseName: "",
    doctorName: "",
    description: "",
    discount: "",
    tax: "",
    amount: "",
    totalAmount: "",
    paymentType: "",
    age: "",
    gender: "",
    address: "",
  });

  // Add the showModal state declaration
  const [showModal, setShowModal] = useState(false);
  const [fieldType, setFieldType] = useState("dropdown");
  const [dropdownName, setDropdownName] = useState("");
  const [selectionType, setSelectionType] = useState("Single");
  const [dropdownOptions, setDropdownOptions] = useState([{ value: "" }]);
  const [textFieldName, setTextFieldName] = useState("");
  const [textOptions, setTextOptions] = useState([{ value: "" }]);

  const addOption = () => {
    setDropdownOptions([...dropdownOptions, { value: "" }]);
  };

  const addTextOption = () => {
    setTextOptions([...textOptions, { value: "" }]);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...dropdownOptions];
    updatedOptions[index].value = value;
    setDropdownOptions(updatedOptions);
  };

  const handleInputChange = (section, field, value) => {
    if (section === "hospital") {
      setHospitalDetails({ ...hospitalDetails, [field]: value });
    } else {
      setPatientDetails({ ...patientDetails, [field]: value });
    }
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Billing And Payments", path: "/Billing&Payment" },
    { label: "Create Bill", path: "/CreateBill" },
  ];

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10 MB
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <BillingTopbar breadcrumbItems={breadcrumbItems} />
        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Create Bill</h3>

            {/* Hospital Details Section */}
            <div className="border p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold">Hospital Details</h4>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center space-x-2 text-white select-btn px-3 py-2 rounded-md font-medium"
                >
                  <FaPlus />
                  <span>Add New Field</span>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div
                  {...getRootProps()}
                  className="col-span-1 border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <FaUpload className="text-gray-400 text-3xl mb-2" />
                    {isDragActive ? (
                      <p className="text-blue-500">Drop the files here ...</p>
                    ) : (
                      <>
                        <p className="text-blue-500 font-semibold">
                          Upload a file
                        </p>
                        <p className="text-gray-500">or drag and drop</p>
                        <p className="text-gray-400 text-sm mt-2">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange("hospital", "name", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter Other Text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange("hospital", "otherText", e.target.value)
                    }
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange("hospital", "email", e.target.value)
                    }
                  />
                  <input
                    type="date"
                    placeholder="Select Bill Date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange("hospital", "billDate", e.target.value)
                    }
                  />
                  <input
                    type="time"
                    placeholder="Enter Bill Time"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange("hospital", "billTime", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter Bill Number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange(
                        "hospital",
                        "billNumber",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange(
                        "hospital",
                        "phoneNumber",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleInputChange("hospital", "address", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Patient Details Section */}
            <div className="border p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold">Patient Details</h4>
                
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center space-x-2 text-white select-btn px-3 py-2 rounded-md font-medium"
                >
                  <FaPlus />
                  <span>Add New Field</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Disease Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "diseaseName", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Doctor Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "doctorName", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "description", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Discount (%)"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "discount", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Tax"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "tax", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "amount", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Enter Total Amount"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "totalAmount", e.target.value)
                  }
                />
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "paymentType", e.target.value)
                  }
                >
                  <option>Select Payment Type</option>
                  <option>Cash</option>
                  <option>Credit Card</option>
                  <option>Insurance</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Age"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "age", e.target.value)
                  }
                />
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "gender", e.target.value)
                  }
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleInputChange("patient", "address", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-gray-200 text-gray-600 px-6 py-1 rounded-md">
                Save
              </button>
            </div>

            {/* Modal for Adding New Field */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h3 className="text-lg font-semibold mb-4">Add New Field</h3>
                  <div className="space-y-4">
                    <label>
                      <input
                        type="radio"
                        name="fieldType"
                        value="dropdown"
                        checked={fieldType === "dropdown"}
                        onChange={() => setFieldType("dropdown")}
                      />
                      <span className="ml-2 me-6">Dropdown</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="fieldType"
                        value="textField"
                        checked={fieldType === "textField"}
                        onChange={() => setFieldType("textField")}
                      />
                      <span className="ml-2">Text Field</span>
                    </label>
                  </div>
                  {fieldType === "dropdown" && (
                    <div className="mt-4 space-y-3">
                      <div>
                        <label className="block font-medium">Selection</label>
                        <select
                          value={selectionType}
                          onChange={(e) => setSelectionType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option>Single</option>
                          <option>Multiple</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        placeholder="Dropdown Name"
                        value={dropdownName}
                        onChange={(e) => setDropdownName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <label className="block font-medium">Options</label>
                      {dropdownOptions.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder={`Value ${index + 1}`}
                          value={option.value}
                          onChange={(e) =>
                            handleOptionChange(index, e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        />
                      ))}
                      <button
                        onClick={addOption}
                        className="text-blue-500 text-sm underline"
                      >
                        Add Option
                      </button>
                    </div>
                  )}
                  {fieldType === "textField" && (
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Text Field Name"
                        value={textFieldName}
                        onChange={(e) => setTextFieldName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    <label className="block font-medium">Options</label>
                      {textOptions.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder={`Option ${index + 1}`}
                          value={option.value}
                          onChange={(e) =>
                            handleOptionChange(index, e.target.value, "textField")
                          }
                          className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        />
                      ))}
                      <button
                        onClick={addTextOption}
                        className="text-blue-500 text-sm underline"
                      >
                        Add Option
                      </button>
                    </div>
                  )}
                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-200 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(false);
                        // Logic to handle new field addition
                      }}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBill;
