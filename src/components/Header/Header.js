import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="services">Services</Link>
        {user.email ? (
          <Link to="/profile"> Profile </Link>
        ) : (
          <div>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
          </div>
        )}
        <Link to="contact">Contact</Link>
        {user.email && (
          <Link to="" onClick={logOut}>
            Log Out
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
