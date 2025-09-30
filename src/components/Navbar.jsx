import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const location = useLocation();

  const cities = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tiruppur",
    "Erode",
    "Vellore",
    "Thoothukudi",
    "Thanjavur",
    "Dindigul",
    "Cuddalore",
    "Kanchipuram",
    "Karur",
    "Ooty",
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"
            >
              RideEasy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors text-sm xl:text-base ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors text-sm xl:text-base ${
                isActive("/blog")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors text-sm xl:text-base ${
                isActive("/about")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors text-sm xl:text-base ${
                isActive("/contact")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Contact Us
            </Link>

            {/* City Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
              >
                <MapPin size={16} />
                <span>{selectedCity}</span>
                <ChevronDown size={16} />
              </button>
              {isCityDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 xl:w-48 bg-white rounded-md shadow-lg py-1 z-50 max-h-64 overflow-y-auto">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 xl:px-6 py-2 rounded-full font-semibold text-sm xl:text-base hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive("/")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive("/blog")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive("/about")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive("/contact")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <div className="px-3 py-2">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-3 py-2">
                <Link
                  to="/login"
                  className="block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-orange-600 hover:to-red-600 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
