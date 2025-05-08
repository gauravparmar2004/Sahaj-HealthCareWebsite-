import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun } from 'lucide-react'; // or any icon

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Features', path: '/features' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Chat', path: '/chat' },
];

const Navbar = () => {
  return (
    <nav className="bg-[#111827] text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-blue-500 text-2xl">⎋</span>
        <span className="font-bold text-xl text-blue-500">Med.ai</span>
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-medium'
                  : 'text-gray-300 hover:text-blue-400 transition-colors duration-200'
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Sun className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <button className="text-gray-300 hover:text-white">Log in</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
