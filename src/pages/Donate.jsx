import React from "react";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 font-[Poppins] flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-pacifico text-yellow-600 mb-6">
          Support Our Mission
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Thank you for your interest in supporting{" "}
          <strong>Healing Lives NGO</strong>.  
          Online donations will be available soon.  
          Your kindness helps us provide medical aid, education, and hope to
          those affected by leprosy.
        </p>

        <div className="inline-block bg-yellow-500 text-white text-lg px-6 py-3 rounded-lg shadow-md mb-6">
          💛 Donation Portal Coming Soon
        </div>

        <p className="text-gray-500 italic mb-8">
          Stay connected with us for updates and ways to contribute!
        </p>

        {/* === Back Button === */}
        <Link
          to="/"
          className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
