import React from "react";
import NetflixLogo from "../assets/Netflix_Logo_PMS.png";
import ProfileIcon from "../assets/profileIcon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-28 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NetflixLogo} alt="Logo" />
      {user && (
        <div className="flex p-2 items-center space-x-2">
          <img className="w-8 h-8" src={user.photoURL} alt="ProfileIcon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
