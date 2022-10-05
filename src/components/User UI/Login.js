import "./Login.css";

const Login = () => {
  return (
    <form className="login">
      <h1 className="login-header">LOG-IN</h1>
      <label type="text" className="login-label">
        Username
        <input className="login-input" />
      </label>
      <label className="login-label">
        Password
        <input type="password" className="login-input" />
      </label>
      <button className="login-button">Login</button>
      <h2 className="forgot">Forgot password</h2>
    </form>
  );
};

export default Login;
