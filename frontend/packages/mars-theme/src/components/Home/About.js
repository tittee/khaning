import { connect } from "frontity";
import imgHome1 from "./../../assets/images/home/h1.jpg";
import imgFlowersF13 from "./../../assets/images/flowers/f13.png";
import imgLogo4 from "./../../assets/images/logo4.png";
import imgLogo5 from "./../../assets/images/logo5.png";
import imgLogo6 from "./../../assets/images/logo6.png";
import Link from "../link";

const About = () => {
  return (
    <div className="container mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
        <div className="row gx-lg-5">
          <div className="col-lg-6 mb-lg-0 mb-px-30">
            <div className="position-relative"><img className="z-index-3 height-px-780 w-100 object-fit-cover"
                src={imgHome1} alt="home-1-image"/><img
                className="z-index-flower position-absolute top-px-9 start-0 translate-middle"
                src={imgFlowersF13} alt="flower-13-image" /></div>
          </div>
          <div className="col-lg-6 my-auto">
            <div className="ms-px-lg-32">
              <h5 className="font-letter-space mb-px-8">Go Organic</h5>
              <h2 className="mb-px-17">It’s always better when it’s natural.</h2>
              <div className="pe-px-lg-40 pb-px-36">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat
                  scelerisque, urna libero lacinia nisi, vitae viverra augue turpis eget dui. Suspendisse pellentesque
                  iaculis venenatis. </p>
              </div>
              <div className="pe-px-lg-60">
                <div className="row gx-lg-0 mb-px-md-45 mb-px-30">
                  <div className="col-3"><img src={imgLogo4} alt="logo-4" /></div>
                  <div className="col-9">
                    <div className="ms-px-n-5">
                      <h5 className="mb-px-12">Eat clean and green</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat
                        scelerisque.</p>
                    </div>
                  </div>
                </div>
                <div className="row gx-lg-0 mb-px-md-45 mb-px-30">
                  <div className="col-3"><img src={imgLogo5} alt="logo-5" /></div>
                  <div className="col-9">
                    <div className="ms-px-n-5">
                      <h5 className="mb-px-12">Grown by Nature</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat
                        scelerisque.</p>
                    </div>
                  </div>
                </div>
                <div className="row gx-lg-0">
                  <div className="col-3"><img src={imgLogo6} alt="logo-6" /></div>
                  <div className="col-9">
                    <div className="ms-px-n-5">
                      <h5 className="mb-px-12">Eat good, Feel good</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec
                        placerat scelerisque.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default connect(About);
