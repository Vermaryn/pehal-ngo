import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-[Poppins]">
      <main className="flex-grow">
        {/* === Hero Section === */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-pacifico mb-4">
              About Healing Lives NGO
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-blue-100">
              We are committed to supporting individuals affected by leprosy
              through awareness, medical care, rehabilitation, and social
              empowerment.
            </p>
          </div>
        </section>

        {/* === Mission & Vision === */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/about/our mission.jpg"
              alt="Mission"
              className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-pacifico text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To eradicate the stigma associated with leprosy and to empower
              individuals and families through education, medical care, and
              social inclusion. We believe in restoring dignity and hope for
              every affected life.
            </p>

            <h2 className="text-2xl font-pacifico text-green-700 mt-8 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A world free from leprosy-related discrimination, where every
              person lives with equal opportunities, self-respect, and social
              acceptance.
            </p>
          </div>
        </section>

        {/* === Our Story Section === */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-pacifico text-green-700 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2015, Healing Lives NGO began as a small volunteer
                group dedicated to spreading awareness about leprosy in rural
                India. Over time, we expanded our outreach programs, health
                camps, and rehabilitation centers, touching the lives of
                thousands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we collaborate with healthcare professionals, local
                communities, and government initiatives to create long-lasting
                social impact and transform lives.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/about/our vision.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
