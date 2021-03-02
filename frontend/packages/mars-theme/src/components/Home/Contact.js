import React from "react";
import { connect } from "frontity";
import imgHomeH8 from "./../../assets/images/home/h8.jpg";
import imgFlowersF9 from "./../../assets/images/flowers/f9.png";
import Link from "./../link";

const Contact = () => {
  return (
    <div className="container mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
      <div className="row gx-lg-5">
        <div className="col-lg-5">
          <div className="position-relative">
            <img
              className="height-px-408 object-fit-cover w-100"
              src={imgHomeH8}
              alt="image-h8"
            />
            <img
              className="d-lg-block d-none position-absolute top-px-0 start-px-n-93"
              src={imgFlowersF9}
              alt="hero flower image"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="bg-texture-image px-lg-7 pt-px-lg-80 pb-px-lg-81 px-md-5 pt-px-md-50 pb-px-md-51 px-4 pt-px-40 pb-px-41">
            <h5 className="font-letter-space mb-px-8">Need a expert advice?</h5>
            <h2 className="mb-px-17">Ask a Nutritionist Online</h2>
            <div className="pe-px-lg-0 pb-px-6">
              <p>
                Donec euismod posuere rhoncus. Donec vestibulum venenatis nunc,
                quis mollis lectus fermentum vel. Curabitur mollis dolor sapien,
                ut varius arcu ullamcorper vitae rci varius natoque penatibus
                magnis.
              </p>
            </div>
            <Link className="btn btn-parsley" link="/">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(Contact);
