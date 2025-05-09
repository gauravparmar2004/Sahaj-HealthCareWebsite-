import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import Logo from '../assets/SahajIcon.png'
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Features', path: '/features' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Chat', path: '/chat' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-[#111827] text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      
      <div className="flex items-center space-x-2">
        <img className="h-18 w-28 rounded-full object-cover" src={Logo} alt="Profile" />

      </div>

      <ul className="flex space-x-20 text-[1.2vw]">
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
      <div className="relative">
        {!isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/login')} className="text-gray-300 hover:text-white cursor-pointer">
              Log in
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="relative">
            <button onClick={() => setShowDropdown(!showDropdown)} className="focus:outline-none">
              <UserCircle className="w-8 h-8 text-gray-300 hover:text-white" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
