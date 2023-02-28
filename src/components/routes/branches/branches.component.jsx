import { Fragment } from "react";
import Footer from "../../footer/footer.component";
import "./branches.style.css";

const Branches = () => {
  return (
    <Fragment>
      <section className="section section--2" id="section--2">
        <div className="section-header-2">
          <h2 className="section-title-2">Şübelerimiz</h2>
        </div>
        <div className="section-description--2">
          <div className="maps">
            <div className="maps-description">
              <h5>
                <i className="fa fa-map-marker"></i>
                <span>Şirinyalı, 1537. Sk. 4/A, 07160 Muratpaşa/Antalya</span>
              </h5>
              <h5>
                <i className="fa fa-phone"></i>
                <span>0850 255 0007</span>
              </h5>
              <h5>
                <i className="fa fa-clock-o"></i>
                <span>11:30–23:00</span>
              </h5>
            </div>
            <div className="maps-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d102158.6716254634!2d30.610572!3d36.855443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9d954e67e7ea609!2sSushi%20Dotto%20Konyaalt%C4%B1!5e0!3m2!1sen!2str!4v1675087774781!5m2!1sen!2str"
                width="400"
                height="300"
                style={{ border: "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="maps">
            <div className="maps-description">
              <h5>
                <i className="fa fa-map-marker"></i>
                <span>
                  Arapsuyu, Atatürk Blv. No:18A, 07070 Konyaaltı/Antalya
                </span>
              </h5>
              <h5>
                <i className="fa fa-phone"></i>
                <span>0552 652 4084</span>
              </h5>
              <h5>
                <i className="fa fa-clock-o"></i>
                <span>11:00-00:00</span>
              </h5>
            </div>
            <div className="maps-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d102162.83616784948!2d30.747709!3d36.852327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabf649495c7c288f!2sSushi%20Dotto!5e0!3m2!1sen!2str!4v1675087688399!5m2!1sen!2str"
                width="400"
                height="300"
                style={{ border: "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="maps">
            <div className="maps-description maps-spec">
              <h5>
                <i className="fa fa-map-marker"></i>
                <span>
                  Liman, Eres Apartmanı, Boğaçay Cd. No:73/B, 07130
                  Konyaaltı/Antalya
                </span>
              </h5>
              <h5>
                <i className="fa fa-clock-o"></i>
                <span>11:30-23:00</span>
              </h5>
            </div>
            <div className="maps-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d102122.79139642273!2d30.659647!3d36.88228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf188133d108f5bbf!2sSushi%20Dotto!5e0!3m2!1sen!2str!4v1675087730886!5m2!1sen!2str"
                width="400"
                height="300"
                style={{ border: "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
export default Branches;
