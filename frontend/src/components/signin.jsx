import axios from '../components/axiosConfig';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signin() {
  const navigate = useNavigate();
  const [Fomdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  const handleForm = (e) => {
    setFormdata({
      ...Fomdata,
      [e.target.name]: e.target.value
    });
  }

  const submitform = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/signin', Fomdata, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data.success) {
        console.log("hii i am in success");
        console.log(res.data);
         navigate("/home");
        toast.success(res?.data?.message);
        setFormdata({
          email: "",
          password: ""
        });
      } else {
        console.log("hii i am in else");
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred during sign-in");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-6 py-8 rounded-3xl w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Sign-In
        </div>
        <div className="mt-4 self-center text-sm sm:text-md text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={submitform}>
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
                  value={Fomdata.email}
                  onChange={handleForm}
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
                  value={Fomdata.password}
                  onChange={handleForm}
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
                <span className="mr-2 uppercase">Sign-In</span>
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
          to="/signup" // Set the path you want to navigate to
          className="inline-flex items-center text-gray-700 font-medium text-xs text-center"
        >
          <span className="ml-2">
            Create an account?
            <span className="text-xs ml-2 text-blue-500 font-semibold">Signup</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Signin;
