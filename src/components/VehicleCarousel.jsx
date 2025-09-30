import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VehicleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const vehicles = [
    {
      id: 1,
      name: "Bicycles",
      image:
        "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Eco-friendly cycling for city tours",
    },
    {
      id: 2,
      name: "Electric Scooters",
      image:
 "https://images.pexels.com/photos/29766153/pexels-photo-29766153.jpeg?auto=compress&cs=tinysrgb&w=800",      description: "Modern electric scooters for easy commuting",
    },
    {
      id: 3,
      name: "Motorcycles",
      image:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Powerful bikes for long distance adventures",
    },
    {
  id: 3,
  name: "Scooters",
  image:"https://images.pexels.com/photos/9768277/pexels-photo-9768277.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Comfortable and easy-to-ride scooters for city commuting"
},
    {
      id: 5,
      name: "Mopeds",
  image: "https://images.pexels.com/photos/221299/pexels-photo-221299.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Efficient mopeds for quick trips",
    },
    {
      id: 6,
      name: "E-Bikes",
      image:
        "https://images.pexels.com/photos/9712997/pexels-photo-9712997.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Electric bicycles with pedal assistance",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="w-full flex-shrink-0 relative">
            <div className="aspect-video sm:aspect-[16/10] lg:aspect-video relative overflow-hidden rounded-lg">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 hidden sm:block">
                  {vehicle.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleCarousel;
