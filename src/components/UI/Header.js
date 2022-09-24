import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <div className="header-links">
        <a className="header-link" href="#none">
          Who we are
        </a>
        <a className="header-link" href="#none">
          Contact us
        </a>
        <a className="header-link" href="#none">
          Corporate
        </a>
        <a className="header-link" href="#none">
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
