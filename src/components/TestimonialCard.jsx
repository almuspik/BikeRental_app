import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, image, rating, testimonial, location }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
            {name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-500">{location}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm sm:text-base flex-grow">
        "{testimonial}"
      </p>
    </div>
  );
};

export default TestimonialCard;
