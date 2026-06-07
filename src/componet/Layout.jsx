import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import ModeContext from "../context/Mode_context";
import { Login } from "./Login";
import { toast } from "react-toastify";

export const Layout = () => {
  const navigate = useNavigate();
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   const handleDarkMode = () => {
  //     setIsDarkMode(!isDarkMode);
  //   };

  const { isDarkMode, handleDarkMode } = useContext(ModeContext); // used to reduce props drilling
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout SuccesFully!!");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <nav className="nav-dark">
        <h1>TODO</h1>

        <div>
          <Link to="/">Home</Link> |<Link to="about">About</Link> |
          <Link to="alltodo">All Todos</Link>|<Link to="dashboard">Dashboard</Link>
        </div>

        <div className="btn-logout">
          <div onClick={handleDarkMode}>
            {!isDarkMode ? (
              <IoSunnyOutline color="white" size={30} />
            ) : (
              <FaMoon color="white" size={30} />
            )}
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};