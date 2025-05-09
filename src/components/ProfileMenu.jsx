import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="relative">
      <img
        src="https://www.svgrepo.com/show/382106/profile-user.svg"
        alt="profile"
        className="w-8 h-8 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
