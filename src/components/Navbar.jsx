import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // For icons

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-16 bg-white/30 backdrop-blur-md fixed top-0 left-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/ios-filled/100/FF5733/clapperboard.png"
            alt="Clapperboard Icon"
            className="w-10 h-10"
          />
          <span className="text-amber-600 text-2xl font-bold">Movie Blog</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
          >
            Profile
          </Link>
          <Link
            to="/about"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-amber-600 hover:text-gray-400 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-amber-600 hover:text-gray-400 transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-amber-600 hover:text-gray-400 transition duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? (
            <X className="w-8 h-8 text-amber-600" />
          ) : (
            <Menu className="w-8 h-8 text-amber-600" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-white/30 backdrop-blur-md shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/about"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-amber-600 hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="text-amber-600 hover:text-gray-400 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-amber-600 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-amber-600 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
