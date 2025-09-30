import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              RideEasy
            </h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Your trusted partner for bike rentals across Tamil Nadu. Ride
              easy, ride safe.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <span className="text-gray-400 text-sm sm:text-base">
                  Bike Rentals
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm sm:text-base">
                  Scooter Rentals
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm sm:text-base">
                  Electric Vehicles
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm sm:text-base">
                  Long Distance Rides
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
              Contact Info
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 text-sm sm:text-base">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm sm:text-base">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400">info@rideeasy.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 RideEasy. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
