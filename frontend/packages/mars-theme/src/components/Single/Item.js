import React from "react";
import { connect } from "frontity";
import FeaturedMedia from "./../featured-media";
import Link from "../link";

const Item = ({ state, isHome, item }) => {
  return (
    <div className="col-lg-4 mb-px-lg-0 mb-px-50 mb-px-40">
      <article>
        <figure className="entry-media">
          <Link link={item.link}>
            <FeaturedMedia
              className="lozad height-px-320 object-fit-cover w-100"
              alt={item.title.rendered}
              id={item.featured_media}
            />
          </Link>
          <span className="entry-meta-category">{item.category_name}</span>
        </figure>
        <div
          className={`entry-content-wrapper height-px-320 bg-texture-image ${
            isHome ? "bg-white" : null
          }`}
        >
          <header className="entry-header">
            <a href="blog-single-post.html">
              <h3
                className="mb-px-17 hover-color"
                dangerouslySetInnerHTML={{
                  __html: item.title.rendered,
                }}
              ></h3>
            </a>
            <div className="entry-meta-top"></div>
          </header>
          <div className="entry-content">
            <div
              dangerouslySetInnerHTML={{
                __html: item.content.rendered,
              }}
            ></div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default connect(Item);
