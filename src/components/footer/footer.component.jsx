import "./footer.style.scss";
import { ReactComponent as InstLogo } from "../assets/instagram.svg";
import { ReactComponent as FaceLogo } from "../assets/facebook.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot">
      <div className="foot-container">
        <div>
          <img
            src={require("../assets/logo-bigger.jpg")}
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="foot-info-container">
          <div className="foot-head">
            <h3 className="foot-heading">Bizimle iletişime geçin</h3>
          </div>
          <div className="foot-description">
            <div className="round">
              <i className="fa fa-phone"></i>
            </div>
            <span>0850 255 0007</span>
          </div>
        </div>
        <div className="foot-info-container">
          <div className="foot-head">
            <h3 className="foot-heading">Sosyal Media</h3>
          </div>
          <div className="foot-svg">
            <div className="foot-info">
              <Link to="https://www.facebook.com/sushidotto/" target="_blank">
                <FaceLogo />
              </Link>
            </div>
            <div className="foot-info">
              <Link to="https://www.instagram.com/sushidotto/" target="_blank">
                <InstLogo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
