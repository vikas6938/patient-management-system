import React, { useState } from "react";
import logoBanner from "../../assets/images/loginBanner.png";
import logo from "../../assets/images/logo.png";
import vector1 from "../../assets/images/Vector1.png";
import vector2 from "../../assets/images/Vector2.png";
import { Link } from "react-router-dom";
import axios from "axios"; // For API request

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let validationErrors = {};
    if (!email) {
      validationErrors.email = "Email or Phone is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Perform OTP request for password reset action here
        await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
        console.log("OTP requested for:", email);
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form Section */}
      <div className="w-1/2 flex justify-center items-center bg-white p-10">
        <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Forgot Password</h2>
          <p className="mb-4 text-sm">
            Enter your email and we'll send you an OTP to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Email or Phone Input */}
            <div className="relative mb-4">
              <input
                type="text"
                id="email"
                name="email"
                className={`peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0  ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all duration-200  peer-focus:-top-2.5 peer-focus:left-3"
              >
                Email or Phone<span className="text-red-500">*</span>
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

               <Link to="/enter-otp">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Get OTP
            </button>
            </Link>
          </form>
          <p className="text-center mt-4 text-sm">
            <Link to="/login" className="text-blue-500 hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Banner & Vector Section */}
      <div className="w-1/2 bg-gray-100 relative flex justify-center items-center">
        {/* Vectors */}
        <img
          src={vector1}
          alt="Vector Top Left"
          className="absolute top-0 left-0 w-50 h-60"
        />
        <img
          src={vector2}
          alt="Vector Bottom Right"
          className="absolute bottom-0 right-0 w-50 h-60"
        />

        {/* Banner Content */}
        <div className="text-center">
          <img src={logo} alt="Logo" className="mb-4 mx-auto w-60 h-30" />
          <img
            src={logoBanner}
            alt="Banner"
            className="w-full max-w-lg mx-auto"
          />
          <h2 className="text-4xl font-bold mt-4">Hospital</h2>
          <p className="text-gray-600 mt-2 font-semibold">
            You Can stay your Hospital and Contact<br /> With Your Facility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
