import "./Card.css";
import lower from "../../assets/visa.png";
import upper from "../../assets/logo.png";
function Card() {
  return (
    <div className="credit-card">
      <div className="first-row">
        <div className="bank">
          <img className="logo" src={upper} alt="logo" />
          <h2>ViCash</h2>
        </div>
        <h2 className="platinum"> Platinum</h2>
      </div>
      <div className="second-row">
        <h2>8008-6969-4200-1234</h2>
      </div>
      <div className="third-row">
        <div className="details">
          <h3>01/99</h3>
          <h3>4206</h3>
        </div>
        <h2 className="user-name">boyet protacio</h2>
        <img className="lower-logo" src={lower} alt="logo" />
      </div>
    </div>
  );
}

export default Card;
