import React from "react";

const steps = [
  {
    number: "1",
    title: "Connect Your Data",
    description: "Link your health devices or manually input your health metrics to create your profile.",
  },
  {
    number: "2",
    title: "Get AI Analysis",
    description: "Our algorithms analyze your data to identify patterns and provide personalized insights.",
  },
  {
    number: "3",
    title: "Take Action",
    description: "Follow personalized recommendations and track your progress over time.",
  },
];

export default function DailyWellness() {
  return (
    <section className="bg-[#171F2D] text-white pt-20 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Using Med.ai for Daily Wellness</h2>
        <p className="text-lg text-gray-300 mb-10">
          A guided process to build healthy habits using AI-backed feedback and routine tracking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-20 mb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#121c2b] p-6 rounded-xl relative shadow-md hover:shadow-blue-500/30 transition-shadow"
            >
              <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Your Wellness Journey
        </button>
      </div>
    </section>
  );
}
