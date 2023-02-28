import { Fragment } from "react";
import Footer from "../../footer/footer.component";
import "./about-us.style.css";
const AboutUs = () => {
  return (
    <Fragment>
      <div className="section section--3" id="section--3">
        <div className="section-header-3">
          <h2 className="section-title-3">Hakkımızda</h2>
        </div>
        <div className="section-contain">
          <div className="section-container">
            <div className="section-decription-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
                lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere
                ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper
                sagittis id vel leo. Integer feugiat faucibus libero, at maximus
                nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
                turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras
                pharetra mi tristique sapien vestibulum lobortis. Nam eget
                bibendum metus, non dictum mauris. Nulla at tellus sagittis,
                viverra est a, bibendum metus.
              </p>
            </div>
          </div>
          <div className="section-decription-4">
            <div>
              <img
                src={require("../../assets/photo-1.jpg")}
                data-src="fasf/photo-1.jpg"
                className="lazy-img"
              />
            </div>
            <div>
              <img
                src={require("../../assets/photo-2.jpg")}
                data-src="fasf/photo-2.jpg"
                className="lazy-img"
              />
            </div>
            <div>
              <img
                src={require("../../assets/photo-3.jpg")}
                data-src="fasf/photo-3.jpg"
                className="lazy-img"
              />
            </div>
            <div>
              <img
                src={require("../../assets/photo-4.jpg")}
                data-src="fasf/photo-4.jpg"
                className="lazy-img"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default AboutUs;
