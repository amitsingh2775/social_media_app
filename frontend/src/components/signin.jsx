import axios from '../components/axiosConfig';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [user, setUser] = useRecoilState(userState);

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userEmail', formData.email);

        setUser({
          isLogin: true,
          userEmail: formData.email,
          token: res.data.token,
        });

        navigate("/");
        toast.success(res?.data?.message);
        setFormData({
          email: "",
          password: ""
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
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
          Enter your credentials to get access to your account
        </div>

        <div className="mt-10">
          <form onSubmit={submitForm}>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">
                E-Mail Address:
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleForm}
                  className="text-sm placeholder-gray-500 pl-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                Password:
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleForm}
                  className="text-sm placeholder-gray-500 pl-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
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
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/signup"
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
