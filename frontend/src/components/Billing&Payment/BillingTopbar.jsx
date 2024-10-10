// src/components/BillingAndPayment/BillingTopbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaChevronDown, FaAngleRight } from "react-icons/fa";
import user1 from "../../assets/images/user1.png";

const BillingTopbar = ({ onFilterChange, breadcrumbItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const doctorsData = [
    { name: "Dr. Parthiv Patel" },
    { name: "Dr. Titan Grant" },
    { name: "Dr. Keenan Tucker" },
    // add other doctors as needed
  ];

  const patientsData = [
    { patientName: "Julianna Maddox" },
    { patientName: "Julianna Mejia" },
    { patientName: "Julianna Warren" },
    { patientName: "Julianna Estes" },
    // add other patients as needed
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onFilterChange(option); // Notify parent component of change
  };

  useEffect(() => {
    const combinedNames = [
      ...doctorsData.map((doctor) => doctor.name),
      ...patientsData.map((patient) => patient.patientName),
    ];

    if (searchInput.length > 0) {
      const filteredSuggestions = combinedNames.filter((name) =>
        name.toLowerCase().startsWith(searchInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [searchInput]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center ">
      {/* Breadcrumb Section */}

      <div className="mb-2">
        <div className="flex items-center text-gray-500 space-x-4">
          {breadcrumbItems.map((item, index) => (
            <span key={index} className="flex items-center">
              <Link to={item.path} className="hover:text-blue-500">
                {item.label}
              </Link>
              {index < breadcrumbItems.length - 1 && (
                <FaAngleRight className="mx-2" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Search Bar with Suggestions */}
      <div className="flex items-center space-x-4">
        {/* Search Bar with Suggestions */}
        <div className="relative flex items-center bg-gray-100 rounded-full w-64 pr-4">
          <FaSearch className="absolute top-2 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Quick Search"
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full py-2 pl-10 pr-2 rounded-full bg-gray-100 text-gray-600 focus:outline-none"
          />
          {showSuggestions && (
            <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-1 text-gray-700">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Dropdown Button */}
          <div className="relative">
            <button
              className="flex items-center text-gray-400 ml-2 focus:outline-none"
              onClick={toggleDropdown}
            >
              {selectedOption}
              <FaChevronDown className="ml-1" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <ul className="py-1 text-gray-700">
                  {["All", "Doctor", "Patient"].map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Notification Icon */}
        <FaBell className="text-gray-400 text-xl hover:text-gray-600 cursor-pointer" />

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src={user1}
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-right">
            <span className="block text-gray-700 font-semibold">
              Lincoln Philips
            </span>
            <Link
              to="/profile-setting"
              className="block text-sm text-gray-400 text-start"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingTopbar;
