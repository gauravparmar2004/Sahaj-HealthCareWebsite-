import React from "react";
import { FaDna, FaBrain, FaPills, FaAmbulance } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaDna className="text-blue-500 text-3xl" />,
    title: "AI Diagnosis Model",
    description: "AI uses your genetic data to provide risk assessments and personalized health advice.",
    link: "/diagnosis",
  },
  {
    icon: <FaBrain className="text-blue-500 text-3xl" />,
    title: "Telemedicine App",
    description: "Receive personalized meditation and mental wellness routines based on mood tracking.",
    link: "/doctors", 
  },
  {
    icon: <FaPills className="text-blue-500 text-3xl" />,
    title: "Medical History",
    description: "Track medications, receive reminders, and get alerts for potential interactions.",
    link: "/history",
  },
  {
    icon: <FaAmbulance className="text-blue-500 text-3xl" />,
    title: "IOT",
    description: "AI detects emergency conditions and notifies your contacts immediately.",
    link: "/iot",
  },
];

export default function NewFeatures() {
  return (
    <section className="bg-[#0b1120] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">New Features</h2>
        <p className="text-lg text-gray-300 mb-10">
          Discover additional tools Med.ai offers to enhance your health journey using AI innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.link || "#"} key={index}>
              <div className="bg-[#121c2b] p-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition-shadow cursor-pointer">
                {feature.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                <span className="text-blue-400 font-medium hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
