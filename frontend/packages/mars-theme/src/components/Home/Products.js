import { connect } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import imgShopS9 from "./../../assets/images/shop/s9.jpg";
import imgShopS8 from "./../../assets/images/shop/s8.jpg";
import imgShopS7 from "./../../assets/images/shop/s7.jpg";
import imgShopS6 from "./../../assets/images/shop/s6.jpg";
import imgShopS5 from "./../../assets/images/shop/s5.jpg";
import imgShopS4 from "./../../assets/images/shop/s4.jpg";
import imgFlowersF6 from "./../../assets/images/flowers/f6.png";
import imgFlowersF5 from "./../../assets/images/flowers/f5.png";

import Link from "../link";

const Products = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
        <div className="position-relative">
          <div className="text-center">
            <h3 className="mb-px-md-52 mb-px-40">Organic Meals</h3>
          </div>
          <div className="row gx-lg-5 gy-lg-6 card-post-style">
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <Link link="/">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src={imgShopS9}
                    alt="s9 image"
                  />
                </Link>
                <h5 className="product-title">
                  <Link link="/">
                    Taco with meat and vegetables
                  </Link>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$15.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <Link
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    link="/"
                  >
                    Add to cart
                  </Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <Link link="/">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src={imgShopS8}
                    alt="s8 image"
                  />
                </Link>
                <h5 className="product-title">
                  <Link link="/">
                    Sala dwith Grilled squids
                  </Link>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$20.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <Link
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    link="/"
                  >
                    Add to cart
                  </Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <Link link="/">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src={imgShopS7}
                    alt="s7 image"
                  />
                </Link>
                <h5 className="product-title">
                  <Link link="/">Chicken burrito</Link>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$21.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    link="/"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <Link link="/">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src={imgShopS6}
                    alt="s6 image"
                  />
                </Link>
                <h5 className="product-title">
                  <Link link="/">Baked salmon fish</Link>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$15.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    link="/"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <Link link="/">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src={imgShopS5}
                    alt="s5 image"
                  />
                </Link>
                <h5 className="product-title">
                  <Link link="/">Organic Wrap</Link>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$60.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    link="/"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <Link link="/">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src={imgShopS4}
                    alt="s4 image"
                  />
                </Link>
                <h5 className="product-title">
                  <Link link="/">
                    Mexican black bean corn
                  </Link>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$10.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    link="/"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
          </div>
          <div className="text-center mt-px-lg-80">
            <a className="btn btn-parsley" link="shop.html">
              See more
            </a>
          </div>
          <img
            className="d-lg-block d-none position-absolute bottom-px-n-lg-8 start-px-n-lg-41"
            src={imgFlowersF6}
            alt="f6 flower image"
          />
          <img
            className="d-lg-block d-none position-absolute top-px-n-lg-0 end-px-n-lg-37"
            src={imgFlowersF5}
            alt="f5 flower image"
          />
        </div>
      </div>
    </div>
  );
};
export default connect(Products);
