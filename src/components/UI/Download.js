import "./Download.css";
import responsive from "../../assets/1.png";

function Download() {
  return (
    <div className="download">
      <div className="logo-container">
        <img className="responsive-logo" src={responsive} alt="devices" />
      </div>
      <h2>Available anytime, anywhere on any device</h2>
      <div className="buttons-container">
        <button className="button ios"></button>
        <button className="button android"></button>
        <button className="button windows"></button>
        <button className="button mac"></button>
      </div>
    </div>
  );
}

export default Download;
