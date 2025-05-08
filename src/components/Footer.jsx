import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#171F2D] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Brand and Social */}
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-2">Med.ai</h3>
          <p className="mb-4">
            Your personalized AI companion for proactive health and prevention,
            empowering you with health insights.
          </p>
          <div className="flex gap-4 text-xl">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaEnvelope className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">PRODUCT</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">LEGAL</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Compliance</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 Med.ai. All rights reserved.
      </div>
    </footer>
  );
}
