import React from "react";
import { connect } from "frontity";
import FeaturedMedia from "./../featured-media";

/* LIB */
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
/* Image */
import imgComposition8 from "./../../assets/images/flowers/composition8.png";

const Carousel = ({ state, title, featuredMedia }) => {
  return (
    <>
      <div className="position-relative">
        <FeaturedMedia alt={title} id={featuredMedia} />
        {/* <div className="row mt-4 z-index-flower">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div> */}
        <img
          className="d-lg-block d-none position-absolute top-px-lg-15 height-px-407 end-px-n-lg-40"
          src={imgComposition8}
          alt={`Flower background ${title.rendered}`}
        />
      </div>
    </>
  );
};

export default connect(Carousel);
