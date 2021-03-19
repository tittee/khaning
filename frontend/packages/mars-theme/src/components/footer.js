// import React from 'react';
import { connect } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedinIn,
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import imgComposition2 from "./../assets/images/flowers/composition2.png";
import imgComposition5 from "./../assets/images/flowers/composition5.png";
import Link from "./link";

const footer = () => {
  return (
    <footer className="site-footer bg-texture-image overflow-hidden">
      <div className="footer-widgets">
        <div className="container">
          <div className="row gx-lg-40">
            <div className="col-lg-4">
              <div className="position-relative">
                <div className="footer-widget footer-widget-1">
                  <h2 className="mb-px-36">
                    Eat nutritious food because it makes your health so good.
                  </h2>
                  <h4 className="text-flame-pea base-font-family text-uppercase">
                    Oganic
                  </h4>
                  <img
                    className="ms-px-n-45 d-lg-block d-none position-absolute top-px-5 start-px-n-115"
                    src={imgComposition5}
                    alt="hero flower image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-lg-0 mt-md-5 mt-4">
              <div className="ms-px-lg-9">
                <h5 className="mb-px-16">Get in touch</h5>
                <p className="footer-text-size mb-5">info@address.com</p>
                <div className="pt-1">
                  <h5 className="mb-px-28">Headquarters</h5>
                </div>
                <div className="pe-px-lg-0 pe-px-md-60 pe-px-40">
                  <p className="footer-text-size mb-4">
                    9235 Bayberry Drive Hendersonville, NC 28792
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-lg-0 mt-md-5 mt-4">
              <div className="ms-px-lg-14">
                <h5>Useful</h5>
                <div className="footer-widget footer-widget-2">
                  <ul className="pt-px-17">
                    <li>
                      <Link link="/">Certificates</Link>
                    </li>
                    <li>
                      <Link link="/">Platform</Link>
                    </li>
                    <li>
                      <Link link="/">FAQ </Link>
                    </li>
                    <li>
                      <Link link="/">Legal & Privacy</Link>
                    </li>
                    <li>
                      <Link link="/">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="position-relative">
                <div className="ms-px-lg-13">
                  <h5 className="mb-px-16">Newsletter</h5>
                  <p className="footer-text-size mb-4">
                    Sign up here to get the latest news, updates and special
                    offers delivered to your inbox.
                  </p>
                  <form id="contact-form" method="post">
                    <div className="mb-px-20 pb-2">
                      <input
                        className="footer-input form-control input-border text-md-start text-center"
                        id="form_email"
                        type="text"
                        name="lname"
                        placeholder="mail@address.com"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-4 text-md-start text-center">
                        <Link
                          className="footer-form h6 btn-link pb-px-12 d-block"
                          link="#"
                        >
                          Submit
                          <i className="fas fa-long-arrow-alt-right ms-px-14"></i>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                <img
                  className="position-absolute top-px-n-lg-10 end-px-n-lg-100 top-px-n-md-70 end-px-n-md-150"
                  src={imgComposition2}
                  alt="hero flower image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget text-md-start text-center">
                <p className="m-md-0">
                  © 2564 ฟาร์มไก่ไข่ออร์แกนิค พระราม 2 • All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="text-md-end text-center">
                <ul className="list-unstyled list-inlinetrue">
                  <li className="list-inline-item me-px-21">
                    <Link
                      target="_blank"
                      link="https://www.facebook.com/tayayningmee"
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={faFacebookSquare}
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-px-21">
                    <Link
                      target="_blank"
                      link="https://www.instagram.com/bluenarysun/"
                    >
                      <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </Link>
                  </li>
                  <li className="list-inline-item me-px-21">
                    <Link link="/">
                      <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link link="/">
                      <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default connect(footer);
