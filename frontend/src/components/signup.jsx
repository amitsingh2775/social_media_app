import React, { useState } from 'react';
import axios from '../components/axiosConfig'; // Import the configured Axios instance
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the password
    if (!regex.test(formData.password)) {
      toast.error("Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return; // Exit the function if the password is invalid
    }

    try {
      const response = await axios.post('/users/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Response from signup:", response.data); // Log the response

      if (response.data.success) {
        toast.success(response.data.message); // Show success message
        navigate("/signin"); // Redirect to sign-in page
        // Reset form data only if signup is successful
        setFormData({
          Name: "",
          username: "",
          email: "",
          password: ""
        });
      } else {
        toast.error(response.data.message || "Signup failed!"); // Show error message if available
      }
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message); // Log the error
      toast.error(error.response?.data.message || "An error occurred during signup!"); // Show error message
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label htmlFor="Name" className="mb-1 text-xs tracking-wide text-gray-600">
                Name:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="username" className="mb-1 text-xs tracking-wide text-gray-600">
                Username:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-lock text-blue-500"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/signin" // Set the path you want to navigate to
          className="inline-flex items-center text-gray-700 font-medium text-xs text-center"
        >
          <span className="ml-2">
            You have an account?
            <span className="text-xs ml-2 text-blue-500 font-semibold">Signin</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
