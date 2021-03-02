import React from "react";
import { connect } from "frontity";
import imgHomeH5 from "./../../assets/images/home/h5.jpg";
import imgHomeH6 from "./../../assets/images/home/h6.jpg";
import imgFlowersF8 from "./../../assets/images/flowers/f8.png";
import imgFlowersF9 from "./../../assets/images/flowers/f9.png";
import Link from "../link";

const Organic = () => {
  return (
    <div className="bg-texture-image overflow-hidden pt-px-lg-120 pb-px-lg-120 pt-px-md-80 pb-px-md-70 pt-px-60 pb-px-50">
      <div className="container pb-px-lg-66">
        <div className="row gx-lg-5">
          <div className="col-lg-6 order-lg-1">
            <div className="ms-px-lg-32">
              <div className="position-relative">
                <div className="ms-px-lg-151 me-lg-0 me-px-md-150">
                  <div className="ps-px-lg-30 pe-lg-0 pe-px-md-70">
                    <img
                      className="mb-md-0 mb-px-20 height-px-550 object-fit-cover w-100"
                      src={imgHomeH5}
                      alt="home image-5"
                    />
                    <img
                      className="d-md-block d-none position-absolute top-px-n-lg-0 end-px-n-lg-44 top-px-n-md-15 end-px-n-md-10"
                      src={imgFlowersF8}
                      alt="f8 flower image"
                    />
                  </div>
                </div>
                <div className="position-md-absolute top-px-lg-0 end-px-lg-0 top-px-md-15">
                  <div className="me-px-lg-101 ms-px-md-150 ms-lg-0 mt-px-lg-150 mt-px-md-120">
                    <div className="pe-px-lg-85 ps-lg-0 ps-px-md-70 pt-px-lg-70">
                      <img
                        className="height-px-460 object-fit-cover w-100"
                        src={imgHomeH6}
                        alt="home image-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto">
            <div className="position-relative">
              <div className="mt-px-lg-84 mt-px-md-150 mt-px-30">
                <h5 className="font-letter-space mb-px-8">Go Organic</h5>
                <h2 className="mb-px-17">
                  It’s always better when it’s natural.
                </h2>
                <div className="pe-px-lg-90 pb-px-6">
                  <p>
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                  </p>
                </div>
                <div className="row mt-px-lg-30 mt-px-20">
                  <div className="col-md-6 mb-md-0 mb-3">
                    <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing. Cras
                      maximus, dolor nec placerat scelerisque.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing. Cras
                      maximus, dolor nec placerat scelerisque.
                    </p>
                  </div>
                </div>
                <div className="row mt-px-lg-35 mt-px-20">
                  <div className="col-md-6 mb-md-0 mb-3">
                    <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing. Cras
                      maximus, dolor nec placerat scelerisque.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                    <p>
                      Lorem ipsum dolor amet, consectetur adipiscing. Cras
                      maximus, dolor nec placerat scelerisque.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="d-lg-block d-none position-absolute top-px-40 start-px-n-77"
                src={imgFlowersF9}
                alt="f9 flower image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organic;
