import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Community Awareness Drives",
      description:
        "We organize awareness campaigns to educate communities about leprosy — its causes, early detection, and prevention. These drives help reduce stigma and encourage timely medical help.",
      image: "/services/NGO-holds-awareness-drive.jpg",
    },
    {
      id: 2,
      title: "Medical Camps & Rehabilitation",
      description:
        "Our regular medical camps provide free health checkups, diagnosis, and medicine distribution. We also offer rehabilitation services to help individuals regain confidence and mobility.",
      image: "/services/Rural health care.jpg",
    },
    {
      id: 3,
      title: "Education & Empowerment",
      description:
        "We support education for children from leprosy-affected families and provide skill training for adults to ensure long-term empowerment and social inclusion.",
      image: "/services/Educate-Girls-an-NGO.jpg",
    },
    {
      id: 4,
      title: "Livelihood Support",
      description:
        "Through microfinance and skill development, we help families start small businesses and rebuild their lives with dignity and self-reliance.",
      image: "/services/teamwork.JPG",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-[Poppins]">
      {/* === Hero Section === */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-pacifico mb-3">What We Do</h1>
        <p className="text-lg max-w-3xl mx-auto text-blue-100">
          Our initiatives focus on health, awareness, and empowerment — helping
          leprosy-affected individuals lead confident and dignified lives.
        </p>
      </section>

      {/* === Services Section === */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-pacifico text-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
