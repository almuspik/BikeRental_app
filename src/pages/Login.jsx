import React, { useState } from "react";
import { Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState("mobile");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { loginMethod, formData });
    alert("Login functionality would be implemented with backend integration");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center py-6 sm:py-12">
      <div className="max-w-md w-full mx-4 sm:mx-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Sign in to your RideEasy account
            </p>
          </div>{" "}
          {/* Login Method Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6 sm:mb-8">
            <button
              onClick={() => setLoginMethod("mobile")}
              className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 py-2 px-2 sm:px-4 rounded-md transition-all text-sm sm:text-base ${
                loginMethod === "mobile"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Mobile</span>
            </button>
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 py-2 px-2 sm:px-4 rounded-md transition-all text-sm sm:text-base ${
                loginMethod === "email"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Email</span>
            </button>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Mobile/Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                {loginMethod === "mobile" ? "Mobile Number" : "Email Address"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {loginMethod === "mobile" ? (
                    <Phone className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Mail className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <input
                  type={loginMethod === "mobile" ? "tel" : "email"}
                  name={loginMethod}
                  value={
                    loginMethod === "mobile" ? formData.mobile : formData.email
                  }
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm sm:text-base"
                  placeholder={
                    loginMethod === "mobile"
                      ? "Enter your mobile number"
                      : "Enter your email address"
                  }
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              Sign In
            </button>
          </form>
          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          {/* Social Login Buttons */}
          <div className="space-y-2 sm:space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Continue with Google
              </span>
            </button>

            <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Continue with Facebook
              </span>
            </button>
          </div>
          {/* Sign Up Link */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-600 text-sm sm:text-base">
              Don't have an account?{" "}
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm sm:text-base">
                Sign up here
              </button>
            </p>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mt-6 sm:mt-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
            Get the RideEasy App
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
            Download our app for a better experience
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
              App Store
            </button>
            <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
