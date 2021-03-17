import React from "react";
import { connect } from "frontity";
import Link from "../link";

const News = () => {
  return (
    <>
      <div className="bg-texture-image overflow-hidden pt-px-lg-120 pb-px-lg-120 pt-px-md-80 pb-px-md-70 pt-px-60 pb-px-50">
        <div className="text-center mb-px-lg-62 mb-px-lg-52 mb-px-40">
          <h3>บทความ</h3>
        </div>
        <div className="container pb-px-lg-66">
          <div className="row gx-lg-5 gy-lg-5 gy-3 gx-3 blog-post card-post-style">
            <div className="col-lg-4 mb-lg-0 mb-md-5 mb-4">
              <article>
                <figure className="entry-media">
                  <a href="blog-single-post.html">
                    <img
                      className="lozad height-px-320 object-fit-cover w-100"
                      src="assets/images/blog/b1.jpg"
                      data-src="assets/images/blog/b1.jpg"
                      alt="b1 image"
                      data-loaded="true"
                    />
                  </a>
                  <span className="entry-meta-category">
                    <a href="blog-three-col.html">Ingradiants</a>
                  </span>
                </figure>
                <div className="entry-content-wrapper bg-texture-image">
                  <header className="entry-header">
                    <a href="blog-single-post.html">
                      <h5 className="mb-px-17 hover-color">
                        Naturally grown green pumpkin
                      </h5>
                    </a>
                    <div className="entry-meta-top"></div>
                  </header>
                  <div className="entry-content">
                    <p>
                      Cras erosed nisl, imperdiet in nisl rhoncus, lobortis
                      tempus ligula. Duis elementum laoreet congue. In
                      scelerisque metused interdum eros dignissim nisl laoreet.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-md-5 mb-4">
              <article>
                <figure className="entry-media">
                  <a href="blog-single-post.html">
                    <img
                      className="lozad height-px-320 object-fit-cover w-100"
                      src="assets/images/blog/b2.jpg"
                      data-src="assets/images/blog/b2.jpg"
                      alt="b2 image"
                      data-loaded="true"
                    />
                  </a>
                  <span className="entry-meta-category">
                    <a href="blog-three-col.html">Vegitabe</a>
                  </span>
                </figure>
                <div className="entry-content-wrapper bg-texture-image">
                  <header className="entry-header">
                    <a href="blog-single-post.html">
                      <h5 className="mb-px-17 hover-color">
                        Fresh tomatoes harvesting{" "}
                      </h5>
                    </a>
                    <div className="entry-meta-top"></div>
                  </header>
                  <div className="entry-content">
                    <p>
                      Cras erosed nisl, imperdiet in nisl rhoncus, lobortis
                      tempus ligula. Duis elementum laoreet congue. In
                      scelerisque metused interdum eros dignissim nisl laoreet.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-md-5 mb-4">
              <article>
                <figure className="entry-media">
                  <a href="blog-single-post.html">
                    <img
                      className="lozad height-px-320 object-fit-cover w-100"
                      src="assets/images/blog/b3.jpg"
                      data-src="assets/images/blog/b3.jpg"
                      alt="b3 image"
                      data-loaded="true"
                    />
                  </a>
                  <span className="entry-meta-category">
                    <a href="blog-three-col.html">Natural</a>
                  </span>
                </figure>
                <div className="entry-content-wrapper bg-texture-image">
                  <header className="entry-header">
                    <a href="blog-single-post.html">
                      <h5 className="mb-px-17 hover-color">
                        Fresh vegetables are important
                      </h5>
                    </a>
                    <div className="entry-meta-top"></div>
                  </header>
                  <div className="entry-content">
                    <p>
                      Cras erosed nisl, imperdiet in nisl rhoncus, lobortis
                      tempus ligula. Duis elementum laoreet congue. In
                      scelerisque metused interdum eros dignissim nisl laoreet.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="text-center mt-lg-5 mt-2">
            <a className="btn btn-parsley" href="blog.html">
              See more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
