// import { useEffect } from "react";
import { Global, css, connect } from "frontity";
import imgFlowerF100 from "./../../assets/images/flowers/f100.png";
import imgShopS3 from "./../../assets/images/shop/s3.jpg";
import imgShopS5 from "./../../assets/images/shop/s5.jpg";
import imgShopS6 from "./../../assets/images/shop/s6.jpg";
import imgFlowersCircle from "./../../assets/images/flowers/circle.png";
import Link from "../link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const Banner = () => {
  return (
    <>
      <Global styles={css(carouselStyles)} />

      <div className="bg-texture-image pt-px-lg-120 pb-px-lg-120 pt-px-md-80 pb-px-md-70 pt-px-30 pb-px-60 overflow-hidden">
        <img
          className="ms-px-n-lg-45 d-lg-block d-none position-absolute top-px-lg-23 start-px-lg-0"
          src={imgFlowerF100}
          alt="hero flower image"
        />
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-lg-5 order-lg-1 mb-lg-0 mb-px-md-40 mb-px-30">
              <div className="position-relative">
                <CarouselProvider
                  naturalSlideWidth={400}
                  naturalSlideHeight={600}
                  totalSlides={3}
                  infinite={true}
                  className="carousel slide z-index-back me-px-lg-0 me-px-md-60"
                >
                  <Slider className="carousel-inner">
                    <Slide
                      className="carousel-item pb-px-lg-50"
                      style={{ height: "100%", paddingBottom: "0" }}
                      index={0}
                    >
                      <div className="position-relative">
                        <img
                          className="d-block w-100 height-px-520 object-fit-cover w-100"
                          src={imgShopS3}
                          alt="slider one image"
                        />
                        <div className="position-absolute top-50 end-0">
                          <div className="me-px-50 mt-px-lg-145 mt-px-md-151">
                            <div className="bg-white mb-px-n-50 border-radius-home ps-px-30 pe-px-30 pt-px-28 pb-px-32">
                              <h5>Grilled squids </h5>
                              <div className="pt-px-4">
                                <h6 className="price">$9.99</h6>
                              </div>
                              <div className="mt-px-14">
                                <Link
                                  className="h6 btn-link border-2 border-bottom shop-button-style"
                                  link="/"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide className="carousel-item pb-px-lg-50" index={1}>
                      <div className="position-relative">
                        <img
                          className="d-block w-100 height-px-520 object-fit-cover w-100"
                          src={imgShopS5}
                          alt="slider one image"
                        />
                        <div className="position-absolute top-50 end-0">
                          <div className="me-px-50 mt-px-lg-145 mt-px-md-151">
                            <div className="bg-white mb-px-n-50 border-radius-home ps-px-30 pe-px-30 pt-px-28 pb-px-32">
                              <h5>Grilled squids </h5>
                              <div className="pt-px-4">
                                <h6 className="price">$9.99</h6>
                              </div>
                              <div className="mt-px-14">
                                <Link
                                  className="h6 btn-link border-2 border-bottom shop-button-style"
                                  link="/"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide className="carousel-item pb-px-lg-50" index={2}>
                    <div className="position-relative">
                        <img
                          className="d-block w-100 height-px-520 object-fit-cover w-100"
                          src={imgShopS6}
                          alt="slider one image"
                        />
                        <div className="position-absolute top-50 end-0">
                          <div className="me-px-50 mt-px-lg-145 mt-px-md-151">
                            <div className="bg-white mb-px-n-50 border-radius-home ps-px-30 pe-px-30 pt-px-28 pb-px-32">
                              <h5>Grilled squids </h5>
                              <div className="pt-px-4">
                                <h6 className="price">$9.99</h6>
                              </div>
                              <div className="mt-px-14">
                                <Link
                                  className="h6 btn-link border-2 border-bottom shop-button-style"
                                  link="/"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </Slider>
                  <ButtonBack className="carousel-control-prev">
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </ButtonBack>
                  <ButtonNext className="carousel-control-next">
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </ButtonNext>
                </CarouselProvider>

                {/* <div
                  className="carousel slide z-index-back me-px-lg-0 me-px-md-60"
                  id="carouselExampleControls"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item pb-px-lg-50 active">
                      <div className="position-relative">
                        <img
                          className="d-block w-100 height-px-520 object-fit-cover w-100"
                          src={imgShopS3}
                          alt="slider one image"
                        />
                        <div className="position-absolute top-50 end-0">
                          <div className="me-px-50 mt-px-lg-145 mt-px-md-151">
                            <div className="bg-white mb-px-n-50 border-radius-home ps-px-30 pe-px-30 pt-px-28 pb-px-32">
                              <h5>Grilled squids </h5>
                              <div className="pt-px-4">
                                <h6 className="price">$9.99</h6>
                              </div>
                              <div className="mt-px-14">
                                <Link
                                  className="h6 btn-link border-2 border-bottom shop-button-style"
                                  href="single-product.html"
                                >
                                  Add to cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item pb-px-lg-50">
                      <div className="position-relative">
                        <img
                          className="d-block w-100 height-px-520 object-fit-cover w-100"
                          src={imgShopS5}
                          alt="slider two image"
                        />
                        <div className="position-absolute top-50 end-0">
                          <div className="me-px-50 mt-px-lg-145 mt-px-md-151">
                            <div className="bg-white border-radius-home ps-px-30 pe-px-30 pt-px-28 pb-px-32">
                              <h5>Corn Mixed Salad </h5>
                              <div className="pt-px-4">
                                <h6 className="price">$10.99</h6>
                              </div>
                              <div className="mt-px-14">
                                <a
                                  className="h6 btn-link border-2 border-bottom shop-button-style"
                                  href="single-product.html"
                                >
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item pb-px-lg-50">
                      <div className="position-relative">
                        <img
                          className="d-block w-100 height-px-520 object-fit-cover w-100"
                          src={imgShopS6}
                          alt="slider three image"
                        />
                        <div className="position-absolute top-50 end-0">
                          <div className="me-px-50 mt-px-lg-145 mt-px-md-151">
                            <div className="bg-white border-radius-home ps-px-30 pe-px-30 pt-px-28 pb-px-32">
                              <h5>Ketolegic Diet </h5>
                              <div className="pt-px-4">
                                <h6 className="price">$15.99</h6>
                              </div>
                              <div className="mt-px-14">
                                <a
                                  className="h6 btn-link border-2 border-bottom shop-button-style"
                                  href="single-product.html"
                                >
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </Link>
                </div> */}
                <div className="position-absolute top-px-md-0 start-lg-20 end-px-n-md-5">
                  <img
                    className="mt-px-n-lg-120 mt-px-n-md-70 ms-px-md-150 ps-px-lg-135 ps-px-md-151 d-none d-lg-block"
                    src={imgFlowersCircle}
                    alt="slider image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 my-auto pe-px-lg-150">
              <div className="me-px-lg-100 me-px-md-60">
                <h5 className="font-letter-space mb-px-8">Go Organic</h5>
                <h1 className="hero-font mb-px-28">
                  It’s always better when it’s natural. Eat organic & be healthy
                </h1>
                <ul className="list-unstyled">
                  <li className="mb-px-12">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-parsley me-px-9"
                    />
                    Donec feugiat ipsum sed enim ullamcorper
                  </li>
                  <li className="mb-px-12">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-parsley me-px-9"
                    />
                    Nullam fermentum vel odio ac congue
                  </li>
                  <li className="mb-px-12">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-parsley me-px-9"
                    />
                    Praesent tincidunt ante auctor tellus dictum
                  </li>
                  <li className="mb-px-37">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-parsley me-px-9"
                    />
                    Suspendisse posuere vel massa quis sodales
                  </li>
                </ul>
                <a className="btn btn-parsley" href="page-contact.html">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default connect(Banner);

const carouselStyles = css`
  .slideInner___2mfX9 {
    position: relative !important;
  }
  .carousel-control-prev,
  .carousel-control-next {
    background-color: transparent;
    border: 0;
    outline: 0;
  }
`;
