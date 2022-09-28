import { useState } from "react";
import { Link } from "react-router-dom";
import "./Corporate.css";

const Corporate = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="corporate">
      <form onSubmit={handleLogin} className="corporate-login-container">
        <Link to="/" className="corporate-close" type="button">
          x
        </Link>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <h1>Corporate login</h1>
        <label type="text" className="login-label">
          Username
          <input
            type="text"
            username="username"
            className="corporate-login-input"
            id="username"
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
            className="corporate-login-input"
            id="password"
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            value={details.password}
          />
        </label>
        <button onClick={Login} type="submit" className="corporate-button">
          Login
        </button>
        <h2 className="corporate-forgot forgot">Forgot password</h2>
      </form>
    </div>
  );
};

export default Corporate;
