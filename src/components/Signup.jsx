// src/pages/Signup.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Please login."); // 👈 this is your popup
        navigate("/login"); // 👈 this redirects to login page
      } else {
        setMsg(data.error || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setMsg("Server error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1e293b] p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        {msg && <p className="text-sm text-center text-red-400 mb-2">{msg}</p>}
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none"
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
