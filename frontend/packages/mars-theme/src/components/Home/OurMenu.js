import React from "react";
import { connect } from "frontity";
import imgHomeH8 from "./../../assets/images/home/h8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faVials } from "@fortawesome/free-solid-svg-icons";
import Link from "../link";

const OurMenu = () => {
  return (
    <div className="container mt-px-lg-112 mb-px-lg-120 mt-px-md-80 mb-px-md-70 mt-px-60 mb-px-50">
      <div className="row gx-md-5">
        <div className="col-lg-4 mb-lg-0 mb-px-md-48 mb-px-40">
          <img
            className="height-px-408 w-100 object-fit-cover"
            src={imgHomeH8}
            alt="home image-7"
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-md-0 mb-px-40">
          <div className="bg-saltpan pt-px-lg-81 pb-px-lg-83 ps-px-lg-40 pe-px-lg-40 pt-px-40 pb-px-40 ps-px-40 pe-px-40">
            <div className="row mb-px-5">
              <div className="col-lg-1 col-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-flame-pea icon-left-quote-34"
                />
              </div>
              <div className="col-lg-11 col-10">
                <div className="text-start ms-px-lg-18">
                  <h3 className="h3-md">Our Menu</h3>
                </div>
              </div>
            </div>
            <p className="mb-px-28">
              Donec fermentum sodales lacus ut mollis. Proin posuere urna eu
              quam pellentesque, vel sagittis ipsum pulvinar. Nunc sed tellus.
              Nullam dapibus et turpis ut ultricies.
            </p>
            <a className="btn btn-parsley" href="shop.html">
              View more
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="bg-texture-image pt-px-lg-81 pb-px-lg-83 ps-px-lg-40 pe-px-lg-40 pt-px-40 pb-px-40 ps-px-40 pe-px-40">
            <div className="row mb-px-5">
              <div className="col-lg-1 col-2">
                  <FontAwesomeIcon
                  icon={faVials}
                  className="text-flame-pea icon-left-quote-34"
                />
              </div>
              <div className="col-lg-11 col-10">
                <div className="text-start ms-px-lg-18">
                  <h3 className="h3-md">24 hours delivery</h3>
                </div>
              </div>
            </div>
            <p className="mb-px-28">
              Donec fermentum sodales lacus ut mollis. Proin posuere urna eu
              quam pellentesque, vel sagittis ipsum pulvinar. Nunc sed tellus.
              Nullam dapibus et turpis ut ultricies.
            </p>
            <a className="btn btn-parsley" href="single-product.html">
              Order now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(OurMenu);
