import { Link } from "react-router-dom";
import "./SignUpBox.css";

function SignUp() {
  return (
    <div className="signup">
      <div className="signup-text">
        <h1>Sign up now to get ₱100 Sign up bonus</h1>
        <p>*Limited to first 100 customers</p>
      </div>
      <div className="signup-button">
        <Link className="signup-link" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
