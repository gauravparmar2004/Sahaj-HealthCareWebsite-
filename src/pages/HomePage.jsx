import React from "react";
import NewFeatures from "./NewFeatures";
import DailyWellness from "./DailyWellness";
import UserFeedback from "./UserFeedback";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#171F2D] min-h-screen text-white flex items-center justify-center px-4">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white -mt-32">
              SAHAJ - Your AI <br /> Your Health Our Priority
            </h1>
            <p className="text-gray-300 text-lg">
              Personalized health insights powered by artificial intelligence
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  const isLoggedIn =
                    localStorage.getItem("isLoggedIn") === "true";
                  if (isLoggedIn) {
                    navigate("/interactionpage");
                  } else {
                    navigate("/login", { state: { from: "/interactionpage" } });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm cursor-pointer font-bold "
              >
                Get Started →
              </button>

              <button className="border border-gray-600 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>

          {/* Image / Illustration Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/assets/health-dashboard.png" // replace with actual path
              alt="Health Dashboard Illustration"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <NewFeatures />
      <DailyWellness />
      <UserFeedback />
    </div>
  );
};

export default HomePage;
