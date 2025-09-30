import React from "react";
import { TrendingUp, Download, Navigation, MapPin } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      value: "6,500+",
      label: "Total Two-Wheelers",
    },
    {
      icon: <Download className="w-8 h-8 text-emerald-500" />,
      value: "900K+",
      label: "App Downloads",
    },
    {
      icon: <Navigation className="w-8 h-8 text-orange-500" />,
      value: "60M+",
      label: "KMs Driven",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      value: "19+",
      label: "Total Locations",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Stats */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 lg:mb-8">
              Our Amazing <span className="text-blue-600">Journey</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-lg mb-3 sm:mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Biker Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Biker performing stunts"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
