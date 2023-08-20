import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/whiteLogo.png";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <nav className="bg-secondary flex flex-row items-center justify-between py-4 px-8">
      <Link to="/home">
        <img src={logo} alt="logo" className="m-auto" />
      </Link>
      <ul className="flex flex-row items-center justify-between gap-4">
        <li>
          <button onClick={handleLogout}>
            <HiOutlineLogout className="text-paragraph100" size={24} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
