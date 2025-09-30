import React from "react";
import { Users, Award, Shield, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Safety First",
      description:
        "Every vehicle undergoes rigorous safety checks and maintenance to ensure your security on the road.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Customer Care",
      description:
        "We prioritize customer satisfaction with 24/7 support and personalized service for every rider.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Quality Service",
      description:
        "Award-winning service with top-rated vehicles and industry-leading customer satisfaction scores.",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Community Focus",
      description:
        "Building a community of riders who share our passion for safe, sustainable, and enjoyable transportation.",
    },
  ];

  const team = [
    {
      name: "Ravi Shankar",
      position: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Passionate about revolutionizing transportation in Tamil Nadu with over 15 years in the automotive industry.",
    },
    {
      name: "Priya Kumari",
      position: "Head of Operations",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Expert in fleet management and customer service with a focus on operational excellence.",
    },
    {
      name: "Arjun Krishnan",
      position: "Technology Lead",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Leading our digital transformation with innovative solutions for seamless bike rental experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-emerald-400">RideEasy</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're on a mission to make transportation accessible, sustainable,
            and enjoyable for everyone across Tamil Nadu
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-600">Journey</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2018, RideEasy began as a small startup with a big
                vision: to revolutionize how people move around cities in Tamil
                Nadu. What started with just 10 bicycles in Chennai has now
                grown into the state's largest bike rental network.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                We believe that transportation should be convenient, affordable,
                and environmentally friendly. Our diverse fleet of bicycles,
                electric scooters, motorcycles, and mopeds caters to every need
                – from daily commuting to weekend adventures.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to serve over 100,000 customers across 19+
                cities, helping them explore Tamil Nadu's rich culture and
                beautiful landscapes while reducing their carbon footprint.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Biker performing stunts"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-600">Values</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do at RideEasy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The passionate people behind RideEasy's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-emerald-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To provide safe, reliable, and sustainable transportation solutions
            that connect communities, reduce traffic congestion, and promote
            eco-friendly mobility across Tamil Nadu. We're committed to making
            every journey memorable while contributing to a cleaner, greener
            future.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
