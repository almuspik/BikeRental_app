import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Routes for Motorcycle Adventures in Tamil Nadu",
      excerpt:
        "Discover the most scenic and thrilling routes across Tamil Nadu that every bike enthusiast should explore.",
      image:
        "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Arun Kumar",
      date: "March 15, 2024",
      category: "Adventure",
    },
    {
      id: 2,
      title: "Electric Vehicle Revolution in Urban Transportation",
      excerpt:
        "How electric scooters and bikes are changing the way we commute in cities like Chennai and Coimbatore.",
      image:
        "https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Priya Sharma",
      date: "March 12, 2024",
      category: "Technology",
    },
    {
      id: 3,
      title: "Safety Tips for First-Time Bike Renters",
      excerpt:
        "Essential safety guidelines and tips for those renting a bike or scooter for the first time.",
      image:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Rajesh Menon",
      date: "March 10, 2024",
      category: "Safety",
    },
    {
      id: 4,
      title: "Exploring Hill Stations on Two Wheels",
      excerpt:
        "A comprehensive guide to visiting Tamil Nadu's beautiful hill stations on a motorcycle or scooter.",
      image:
        "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Kavya Krishnan",
      date: "March 8, 2024",
      category: "Travel",
    },
    {
      id: 5,
      title: "Cost-Effective Commuting with Bike Rentals",
      excerpt:
        "How bike rentals can be a more economical option compared to owning a vehicle in urban areas.",
      image:
"https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=800"    ,  
author: "Vikram Rajan",
      date: "March 5, 2024",
      category: "Finance",
    },
    {
      id: 6,
      title: "Maintenance Tips for Rental Bikes",
      excerpt:
        "Learn how to take care of your rental bike during your trip to ensure a smooth and safe journey.",
      image:
        "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Deepak Singh",
      date: "March 1, 2024",
      category: "Maintenance",
    },
  ];

  const testimonials = [
    {
      name: "Suresh Babu",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial:
        "RideEasy made my Chennai to Pondicherry trip unforgettable. The Royal Enfield was in excellent condition and the staff was very helpful.",
      location: "Chennai",
    },
    {
      name: "Meera Nair",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial:
        "As a solo female traveler, I felt completely safe with RideEasy. Their bikes are well-maintained and the support team is always available.",
      location: "Kochi",
    },
    {
      name: "Karthik Raman",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4,
      testimonial:
        "Great service for daily commuting. The electric scooter I rent saves me both time and money. Highly recommend for city rides.",
      location: "Coimbatore",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-emerald-400">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest tips, routes, and stories from the
            world of bike rentals
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
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
              Read more success stories from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
