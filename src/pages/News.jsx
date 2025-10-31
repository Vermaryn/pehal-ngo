import React from "react";

export default function News() {
  const stories = [
    {
      title: "Health Camp for Leprosy Patients",
      desc: "We recently organized a free health camp where over 200 people received check-ups, treatment, and medicines. Our medical volunteers provided awareness about early diagnosis and prevention.",
    },
    {
      title: "Awareness Drive in Rural Areas",
      desc: "Our volunteers visited remote villages to spread awareness about leprosy — fighting stigma and educating communities about early detection and available medical care.",
    },
    {
      title: "Skill Training Program",
      desc: "A rehabilitation initiative where affected individuals learned tailoring and handicrafts, empowering them with skills to earn a sustainable livelihood.",
    },
    {
      title: "Educational Support for Children",
      desc: "We launched an education support program for children from leprosy-affected families, ensuring they continue their studies without discrimination.",
    },
    {
      title: "Community Support Groups",
      desc: "Formation of support groups has helped individuals affected by leprosy regain confidence, share experiences, and rebuild their social connections.",
    },
    {
      title: "Annual Health Awareness Marathon",
      desc: "Over 500 participants joined our annual awareness marathon to spread the message of inclusion, hope, and equal rights for leprosy survivors.",
    },
  ];

  return (
    <section id="news" className="py-16 bg-gray-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        {/* === Title === */}
        <h2 className="text-4xl font-pacifico text-center text-green-700 mb-12">
          News & Stories
        </h2>

        {/* === News Grid === */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {story.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
