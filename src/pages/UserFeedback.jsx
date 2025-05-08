import React from "react";

const testimonials = [
  {
    name: "Amit R.",
    title: "Tech Consultant",
    feedback:
      "Tracking my mood and sleep with Med.ai has helped me regain control of my mental health.",
    rating: 5,
  },
  {
    name: "Lina K.",
    title: "Busy Parent",
    feedback:
      "The daily habit nudges keep me focused. It’s like having a personal coach!",
    rating: 5,
  },
  {
    name: "George M.",
    title: "Diabetes Warrior",
    feedback:
      "I finally understand my blood sugar patterns thanks to Med.ai’s insights.",
    rating: 5,
  },
];

export default function UserFeedback() {
  return (
    <section className="bg-[#0b1120] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Real Feedback from Med.ai Users</h2>
        <p className="text-lg text-gray-300 mb-10">
          Discover how real people are using Med.ai to enhance their daily health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-[#171F2D] p-6 rounded-xl shadow-md text-left"
            >
              <div className="flex items-center text-blue-500 mb-3">
                {"★".repeat(user.rating)}
              </div>
              <p className="italic text-gray-200 mb-4">"{user.feedback}"</p>
              <h4 className="font-bold">{user.name}</h4>
              <p className="text-sm text-gray-400">{user.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
