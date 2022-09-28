import { Link } from "react-router-dom";
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
        <Link to="/admin" className="header-link" href="#none">
          Corporate
        </Link>
        <Link to="/user" className="header-link" href="#none">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Header;
