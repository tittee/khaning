import React from "react";
import { connect } from "frontity";
import { PropTypes } from "prop-types";

/* Image Assets */
import imgComposition3 from "./../../assets/images/flowers/composition3.png";
import imgComposition6 from "./../../assets/images/flowers/composition6.png";

import FeaturedMedia from "./../featured-media";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";

const Single = ({ state, post }) => {
  // Get a human readable date.
  const date = new Date(post.date);

  const { title, featured_media, content } = post;

  return (
    <>
      <div className="bg-texture-image pt-px-lg-119 pt-md-7 pt-6 overflow-hidden">
        <div className="container position-relative">
          <img
            className="d-lg-block d-none position-absolute top-px-lg-5 start-px-n-lg-25"
            src={imgComposition6}
            alt="f100 flower image"
          />
          <img
            className="d-lg-block d-none position-absolute top-px-lg-30 end-px-n-lg-35"
            src={imgComposition3}
            alt="f11 flower image"
          />
          <div className="row">
            <PostInfo date={date} title={title} />
            {state.theme.featured.showOnPost && (
              <FeaturedMedia
                className="mt-px-lg-61 mt-px-md-64 mt-px-48 height-px-630 w-100 object-fit-cover object-position-top position-relative z-index-2"
                id={featured_media}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container position-relative mt-lg-8 mt-md-7 mt-5 mb-lg-8 mb-md-7 mb-5">
        <div className="row justify-content-lg-center">
          <div className="col-lg-8">
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </>
  );
};

Single.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(Single);
