import React from "react";
import VehicleCarousel from "../components/VehicleCarousel";
import TestimonialCard from "../components/TestimonialCard";
import StatsSection from "../components/StatsSection";
import FAQ from "../components/FAQ";

const Home = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial:
        "Amazing service! The bike was in perfect condition and the booking process was super smooth. Highly recommend RideEasy for anyone looking for reliable bike rentals.",
      location: "Chennai",
    },
    {
      name: "Priya Sharma",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial:
        "I've been using RideEasy for my daily commute. The electric scooters are fantastic and the app is so user-friendly. Great value for money!",
      location: "Coimbatore",
    },
    {
      name: "Arun Vijay",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4,
      testimonial:
        "Perfect for weekend trips! Rented a motorcycle for a ride to Ooty. The vehicle was well-maintained and customer service was excellent.",
      location: "Madurai",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ride Easy, Ride <span className="text-emerald-400">Smart</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto">
            Premium bike rentals across Tamil Nadu. Your adventure starts here.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Book Now
          </button>
        </div>
      </section>

      {/* Renting Fleets Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Renting <span className="text-blue-600">Fleets</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Choose from our diverse collection of vehicles for every journey
              and adventure
            </p>
          </div>
          <VehicleCarousel />
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Happy <span className="text-emerald-600">Customers</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              Hear what our satisfied customers have to say about their
              experiences
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats + Biker Section */}
      <StatsSection />

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
};

export default Home;
