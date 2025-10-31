import React from "react";

export default function Blogs() {
  const blogs = [
    {
      title: "Understanding Leprosy: Myths vs Facts",
      desc: "Leprosy is often misunderstood. Learn the truth about its causes, treatment, and how society can fight stigma. Dispelling myths is the first step toward acceptance and inclusion.",
    },
    {
      title: "The Power of Early Detection",
      desc: "Early diagnosis and treatment can completely cure leprosy. Awareness and timely action can prevent disability and help restore confidence in affected individuals.",
    },
    {
      title: "Voices of Hope: Survivor Stories",
      desc: "Real-life journeys of individuals who overcame leprosy and are now inspiring others to live with confidence and dignity. Their strength and optimism show the power of hope.",
    },
    {
      title: "Breaking Stigma through Education",
      desc: "Educating communities about leprosy not only prevents discrimination but also promotes compassion and understanding toward those affected.",
    },
    {
      title: "Volunteers Making a Difference",
      desc: "Our dedicated volunteers are the backbone of our mission, helping organize camps, awareness drives, and support programs across rural India.",
    },
    {
      title: "Empowering Women through Skill Development",
      desc: "Women from leprosy-affected families are learning new skills and achieving financial independence through our empowerment initiatives.",
    },
  ];

  return (
    <section id="blogs" className="py-16 bg-gray-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* === Heading === */}
        <h2 className="text-4xl font-pacifico text-green-700 text-center mb-12">
          Blogs
        </h2>

        {/* === Blog Cards === */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col p-6"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {blog.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
