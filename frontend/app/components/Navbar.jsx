"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaSearch,
  FaRegUser,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b">

        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl font-extrabold text-green-700 tracking-wide cursor-pointer">
              OLX
            </h1>
          </Link>

          {/* Search */}
          <div className="flex-1 hidden md:flex">

            <div className="w-full flex border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                className="w-full px-4 py-3 outline-none"
              />

              <button className="bg-black hover:bg-gray-800 transition text-white px-6 flex items-center justify-center">
                <FaSearch size={18} />
              </button>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-5">

            {/* Login */}
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center gap-2 font-semibold hover:text-green-600 transition"
            >
              <FaRegUser />
              Login
            </button>

            {/* SELL Button */}
            <button
              onClick={() => setShowSignup(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold shadow-md transition"
            >
              + SELL
            </button>

          </div>
        </div>

      </header>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]">

          <div className="bg-white w-[90%] max-w-md rounded-2xl p-8 relative shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-bold text-center mb-6">
              Login
            </h2>

            <form className="space-y-5">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg">
                Login
              </button>

            </form>

          </div>

        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]">

          <div className="bg-white w-[90%] max-w-md rounded-2xl p-8 relative shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-bold text-center mb-6">
              Create Account
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg">
                Sign Up
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;