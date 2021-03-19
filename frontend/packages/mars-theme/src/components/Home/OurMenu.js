import React from "react";
import { connect } from "frontity";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faVials } from "@fortawesome/free-solid-svg-icons";
import Link from "../link";

const OurMenu = ({ ourMenusImage, howToShopping, howToVisited }) => {
  return (
    <div className="container mt-px-lg-112 mb-px-lg-120 mt-px-md-80 mb-px-md-70 mt-px-60 mb-px-50">
      <div className="row gx-md-5">
        <div className="col-lg-4 col-12 mb-lg-0 mb-px-md-48 mb-px-40">
          <img
            className="height-px-408 w-100 pt-h-64 object-fit-cover"
            src={ourMenusImage.url}
            alt="home image-7"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-md-0 mb-px-40">
          <div className="bg-saltpan height-px-408 pt-px-lg-81 pb-px-lg-83 ps-px-lg-40 pe-px-lg-40 pt-px-40 pb-px-40 ps-px-40 pe-px-40">
            <div className="row mb-px-5">
              <div className="col-lg-1 col-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-flame-pea icon-left-quote-34"
                />
              </div>
              <div className="col-lg-11 col-10">
                <div className="text-start ms-px-lg-18">
                  <h3 className="h3-md">{ howToShopping.title }</h3>
                </div>
              </div>
            </div>
            <p className="mb-px-28">
              { howToShopping.description }
            </p>            
            <Link className="btn btn-parsley" link={howToShopping.url}>{howToVisited.title}</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="bg-texture-image height-px-408 pt-px-lg-81 pb-px-lg-83 ps-px-lg-40 pe-px-lg-40 pt-px-40 pb-px-40 ps-px-40 pe-px-40">
            <div className="row mb-px-5">
              <div className="col-lg-1 col-2">
                <FontAwesomeIcon
                  icon={faVials}
                  className="text-flame-pea icon-left-quote-34"
                />
              </div>
              <div className="col-lg-11 col-10">
                <div className="text-start ms-px-lg-18">
                  <h3 className="h3-md">{ howToVisited.title }</h3>
                </div>
              </div>
            </div>
            <p className="mb-px-28">
              { howToVisited.description }
            </p>
            <Link className="btn btn-parsley" link={howToVisited.url}>{howToVisited.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(OurMenu);
