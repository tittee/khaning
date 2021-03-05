import React from "react";
import { Global, css, connect } from "frontity";
import imgShopS3 from "./../../assets/images/shop/s3.jpg";
import imgShopS5 from "./../../assets/images/shop/s5.jpg";
import imgShopS6 from "./../../assets/images/shop/s6.jpg";
import imgFlowersCircle from "./../../assets/images/flowers/circle.png";
import Link from "../link";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const Carousel = () => {
  return (
    <>
      <Global styles={css(carouselStyles)} />

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
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </ButtonBack>
        <ButtonNext className="carousel-control-next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </ButtonNext>
      </CarouselProvider>
      <div className="position-absolute top-px-md-0 start-lg-20 end-px-n-md-5">
        <img
          className="mt-px-n-lg-120 mt-px-n-md-70 ms-px-md-150 ps-px-lg-135 ps-px-md-151 d-none d-lg-block"
          src={imgFlowersCircle}
          alt="slider image"
        />
      </div>
    </>
  );
};

export default connect(Carousel);

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
