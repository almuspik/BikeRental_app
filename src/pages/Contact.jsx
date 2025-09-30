import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-emerald-400">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you with all
            your bike rental needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Phone Support
                      </h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">
                        Available 24/7 for assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email Support
                      </h3>
                      <p className="text-gray-600">support@rideeasy.com</p>
                      <p className="text-sm text-gray-500">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Head Office
                      </h3>
                      <p className="text-gray-600">123 Anna Salai, T. Nagar</p>
                      <p className="text-gray-600">
                        Chennai, Tamil Nadu 600017
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-gray-700">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-blue-500" />
                    <span className="font-medium text-gray-700">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-pink-600" />
                    <span className="font-medium text-gray-700">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-red-600" />
                    <span className="font-medium text-gray-700">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                <p className="mb-4">
                  Need immediate assistance during your ride?
                </p>
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call Emergency: +91 98765 00000
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
