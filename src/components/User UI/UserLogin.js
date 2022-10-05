import { useState } from "react";
import { Link } from "react-router-dom";
import "./UserLogin.css";

const UserLogin = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <Link to="/" className="user-login-close">
          X
        </Link>
        <h1 className="login-header">LOG-IN</h1>
        {error !== "" ? <div className="user-error">{error}</div> : ""}
        <label type="text" className="login-label">
          Username
          <input
            type="text"
            username="username"
            className="login-input"
            id="user-username"
            required
            onChange={(e) => {
              setDetails({ ...details, username: e.target.value });
            }}
            value={details.username}
          />
        </label>
        <label className="login-label">
          Password
          <input
            type="password"
            password="password"
            className="login-input"
            id="user-password"
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            value={details.password}
          />
        </label>
        <button className="login-button">Login</button>
        <h2 className="forgot">Forgot password</h2>
      </form>
    </div>
  );
};

export default UserLogin;
