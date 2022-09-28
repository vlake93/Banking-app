import { Link } from "react-router-dom";
import "./SignUpForm.css";
import signUpLogo from "../assets/logo.png";

function SignUpModal() {
  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-up-modal">
      <form className="sign-up-form" method="GET">
        <div className="sign-up-design">
          <img src={signUpLogo} className="logo" alt="logo" />
        </div>
        <div className="sign-up-inputs">
          <Link to="/" className="close" type="button">
            x
          </Link>
          <h1>Sign up</h1>
          <label className="sign-up-label">Name</label>
          <input className="sign-up-input" type="text" />
          <label className="sign-up-label">Email</label>
          <input className="sign-up-input" type="email" />
          <label className="sign-up-label">Username</label>
          <input className="sign-up-input" type="text" />
          <label className="sign-up-label">Password</label>
          <input className="sign-up-input" type="password" />
          <div className="agree-box">
            <input className="agree-checkbox" type="checkbox" />
            <p className="agree-text">
              I have read and agree to ViCash terms and conditions
            </p>
          </div>
          <button onClick={signUp} className="sign-up-button" type="submit">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal;
