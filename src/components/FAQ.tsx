import react, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What documents do I need to rent a bike?",
      answer:
        "You'll need a valid driving license, Aadhaar card, and a security deposit. For electric vehicles, just a valid ID is sufficient.",
    },
    {
      question: "Can I extend my rental period?",
      answer:
        "Yes, you can extend your rental period subject to vehicle availability. Just contact our support team or extend through the app.",
    },
    {
      question: "What if the vehicle breaks down during my trip?",
      answer:
        "We provide 24/7 roadside assistance. Call our helpline and we'll arrange immediate support or a replacement vehicle.",
    },
    {
      question: "Are there any age restrictions for renting?",
      answer:
        "You must be at least 18 years old with a valid driving license. For bicycles and e-bikes, the minimum age is 16.",
    },
    {
      question: "What are the fuel and maintenance policies?",
      answer:
        "You need to return the vehicle with the same fuel level. Basic maintenance during rental is covered by us.",
    },
    {
      question: "Can I book a vehicle in advance?",
      answer:
        "Yes, you can book up to 7 days in advance through our website or mobile app. Advance bookings help ensure availability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
            Find answers to common questions about our bike rental services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
