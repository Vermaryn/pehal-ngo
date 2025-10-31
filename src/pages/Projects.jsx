import React from "react";

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50 font-[Poppins]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-pacifico text-green-700 text-center mb-10">
          Our Projects & Impact
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Healing Lives NGO works to uplift leprosy-affected individuals through
          health care, education, and livelihood programs. Each initiative is
          designed to create self-reliance and restore dignity.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-3">
          <li>Free medical checkup camps in rural areas</li>
          <li>Rehabilitation and physiotherapy centers</li>
          <li>Vocational training for livelihood support</li>
          <li>Community awareness and educational programs</li>
        </ul>
      </div>
    </section>
  );
}
