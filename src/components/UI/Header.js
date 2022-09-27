import { Link, Route, Routes } from "react-router-dom";
import User from "../../pages/User";
import SignUp from "./SignUp";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <div className="header-links">
        <Link className="header-link" href="#none">
          Who we are
        </Link>
        <Link className="header-link" href="#none">
          Contact us
        </Link>
        <Link className="header-link" href="#none">
          Corporate
        </Link>
        <Link to="/signup" li className="header-link" href="#none">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
