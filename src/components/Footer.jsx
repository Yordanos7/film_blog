import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-black mt-auto bottom-0 w-full py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12 md:space-y-16">
        {/* About Section */}
        <div className="text-center">
          <p className="text-white text-lg md:text-2xl font-medium opacity-90 hover:opacity-100 transition-opacity duration-300">
            Your ultimate destination for movies. Discover, collect, and share
            your favorite films.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <ul className="flex flex-col md:flex-row gap-8 justify-center text-xl md:text-2xl text-white space-y-4 md:space-y-0">
            <li className="hover:scale-110 transition duration-300">
              <Link to="/" className="hover:text-amber-300">
                Home
              </Link>
            </li>
            <li className="hover:scale-110 transition duration-300">
              <Link to="/movies" className="hover:text-amber-300">
                Movies
              </Link>
            </li>
            <li className="hover:scale-110 transition duration-300">
              <Link to="/about" className="hover:text-amber-300">
                Developer
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Connect
          </h3>
          <div className="flex justify-center space-x-6 text-white">
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <p className="mt-4 text-white text-sm">
            <a href="mailto:yordanosyohans7@gmail.com">
              Email: yordanosyohans7@gmail.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-300">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Your Movie Site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
