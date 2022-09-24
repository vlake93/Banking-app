import "./Footer.css";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter-sign.png";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <h2>Connect with us</h2>
        <div className="social-logos">
          <img className="social-logo" src={email} alt="email" />
          <img className="social-logo" src={facebook} alt="facebook" />
          <img className="social-logo" src={instagram} alt="instagram" />
          <img className="social-logo" src={twitter} alt="twitter" />
        </div>
        <h3>
          For inquiries, please call our ViCash Contact Center at (02)
          69-420-420 (domestic toll-free 1-420-6969-8008) or send an e-mail to
          customercare@vicash.com.ph
        </h3>
      </div>
      <div className="subsidiaries">
        <h2>subsidiaries & affiliates</h2>
        <p>Slake co.</p>
        <p>Vic's Vaporub</p>
        <p>7-evelyn</p>
      </div>
      <div className="site-links">
        <h2>site links</h2>
        <p>Privacy policy</p>
        <p>Terms of use</p>
        <p>Careers</p>
      </div>
      <div className="quick-links">
        <h2>Quick links</h2>
        <p>ATM & branch locator</p>
        <p>Fees & rates</p>
        <p>Loan calculator</p>
        <p>foreign exchange</p>
        <p>help & support</p>
      </div>
    </div>
  );
}

export default Footer;
