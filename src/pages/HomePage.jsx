import React from "react";
import NewFeatures from "./NewFeatures";
import DailyWellness from "./DailyWellness";
import UserFeedback from "./UserFeedback";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardImg from "../assets/HomePageImgDashboard.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#171F2D] min-h-screen text-white flex items-center justify-center px-4">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
          
          {/* Animated Text Section */}
          <motion.div
            className="md:w-1/2 space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white -mt-22 leading-14 mb-5">
              SAHAJ - Your AI <br />  
              <span className="sm:text-5xl">Your Health Our Priority</span>
            </h1>
            <p className="text-gray-300 text-2xl">
              Personalized health insights powered by artificial intelligence
            </p>
            <div className="flex space-x-6 pt-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const isLoggedIn =
                    localStorage.getItem("isLoggedIn") === "true";
                  if (isLoggedIn) {
                    navigate("/interactionpage");
                  } else {
                    navigate("/login", { state: { from: "/interactionpage" } });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-md text-sm cursor-pointer font-bold"
              >
                Get Started →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-6 py-4 rounded-md text-sm hover:bg-gray-800"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={DashboardImg}
              alt="Health Dashboard Illustration"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
      <NewFeatures />
      <DailyWellness />
      <UserFeedback />
    </div>
  );
};

export default HomePage;
