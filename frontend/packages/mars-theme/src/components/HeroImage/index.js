import React from "react";
import { connect, styled } from "frontity";
import PropTypes from "prop-types";

import FeaturedMedia from "./../featured-media";

/* Image */
import imgFlower from "./../../assets/images/flowers/flower.png";
import bgImgTexture from "./../../assets/images/home/bg-texture.png";

const HeroImage = ({ state, post }) => {
  const media = state.source.attachment[post.featured_media];

  if (!media) return null;

  const SmallBgShop = styled.div`
    background-image: url(${bgImgTexture}), url(${media.source_url});
    background-position: left top, right;
    @media (max-width: 991.98px) {
      background-image: url(${bgImgTexture});
    }
  `;

  return (
    <>
      <SmallBgShop className="small-bg-shop">
        <div className="container">
          <div className="row gx-lg-5 card-post-style">
            <div className="col-lg-12">
              <article>
                <div className="row gx-lg-5 pt-px-lg-151 pb-px-lg-151 pt-px-md-40 pb-px-md-70 pt-px-24 pb-px-60">
                  <div className="col-lg-6 order-lg-1">
                    <div className="d-lg-none">
                      <FeaturedMedia
                        id={post.featured_media}
                        className="mb-px-lg-0 mb-px-md-40 mb-px-30 height-px-355 object-fit-cover w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 my-auto">
                    <div className="position-relative">
                      <div className="me-px-lg-80 mt-px-4">
                        <h5 className="font-letter-space mb-px-7">
                          {post.type}
                        </h5>
                        <Title
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                        <Excerpt
                          className="lead mb-px-14"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></Excerpt>
                        <img
                          className="d-lg-block d-none position-absolute top-px-n-lg-60 start-px-n-lg-84"
                          src={imgFlower}
                          alt="hero flower image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </SmallBgShop>
    </>
  );
};

HeroImage.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(HeroImage);

const Title = styled.h1``;
const Excerpt = styled.div``;
