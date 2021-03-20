import React from "react";
import { connect } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { renderSocial } from "../utils/GlobalFunction";

import {
  faLinkedinIn,
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import imgComposition2 from "./../assets/images/flowers/composition2.png";
import imgComposition5 from "./../assets/images/flowers/composition5.png";
import Link from "./link";


export const renderSocial = (url, icon) => {
  return (
    <li className="list-inline-item me-px-21">
      <Link target="_blank" link={url}>
        <FontAwesomeIcon className="icon" icon={icon} />
      </Link>
    </li>
  );
};


const footer = ({ acf }) => {
  return (
    <footer className="site-footer bg-texture-image overflow-hidden">
      <div className="footer-widgets">
        <div className="container">
          <div className="row gx-lg-40">
            <div className="col-lg-4">
              <div className="position-relative">
                <div className="footer-widget footer-widget-1">
                  <h2 className="mb-px-36">{acf.eat_eggs_organic}</h2>
                  <h4 className="text-flame-pea base-font-family text-uppercase">
                    KHANING ORGANIC
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
                <h5 className="mb-px-16">Contact Me</h5>
                <p className="footer-text-size mb-5">tee.emilond@gmail.com</p>
                <div className="pt-1">
                  <h5 className="mb-px-28">Address</h5>
                </div>
                <div className="pe-px-lg-0 pe-px-md-60 pe-px-40">
                  <p className="footer-text-size mb-4">
                    385 Rama 2 Soi 28 Yek 5, Chom Thong Rd, Chom Thong, Chom Thong, Bangkok Thailand 10150
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-lg-0 mt-md-5 mt-4">
              <div className="ms-px-lg-14">
                <h5>Links</h5>
                <div className="footer-widget footer-widget-2">
                  <ul className="pt-px-3">
                    <li>
                      <Link link="/">About Me</Link>
                    </li>
                    <li>
                      <Link link="/">About GraphQL</Link>
                    </li>
                    <li>
                      <Link link="/">About React.Js</Link>
                    </li>
                    <li>
                      <Link link="/">About Grasby.JS</Link>
                    </li>
                    <li>
                      <Link link="/">About MobX</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="position-relative">
                <div className="ms-px-lg-13">
                  <h5 className="mb-px-16">รับสมัครข่าวสาร</h5>
                  <p className="footer-text-size mb-4">
                    ติดตามข่าวสารใหม่จากเราได้ เพื่อรับข้อมูลข่าวสารใหม่ๆ รวมถึงกิจกรรมดีๆ จากฟาร์มคะนิ้ง
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
                <p className="m-md-0">{acf.copyright}</p>
              </div>
            </div>

            {acf.socials && (
              /* Can use reuseable function */
              <div className="col-lg-6 col-md-6">
                <div className="text-md-end text-center">
                  <ul className="list-unstyled list-inlinetrue">
                    {acf.socials.facebook && renderSocial(acf.socials.facebook.url, faFacebookSquare) }                                        
                    {acf.socials.instagram && renderSocial(acf.socials.instagram.url, faInstagram) }                                        
                    {acf.socials.twitter && renderSocial(acf.socials.twitter.url, faTwitter) }                                        
                    {acf.socials.line && renderSocial(acf.socials.twitter.url, faLinkedinIn) }
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default connect(footer);
