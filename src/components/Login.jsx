import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [emailOrName, setEmailOrName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: emailOrName,
          username: emailOrName,
          password,
        }),
      });

      console.log({
        email: emailOrName,
        password,
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", data.username);
        alert("You are logged in!");
        navigate("/interactionpage");
        window.location.reload();
      } else {
        setMsg(data.error || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMsg("Server error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1e293b] p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Med.ai</h2>
        {msg && <p className="text-sm text-center text-red-400 mb-2">{msg}</p>}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-gray-300">
              Email or Username
            </label>
            <input
              type="text"
              value={emailOrName}
              onChange={(e) => setEmailOrName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none"
              placeholder="Enter your email or username"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#334155] text-white focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log in
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
