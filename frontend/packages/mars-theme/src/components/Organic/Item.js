import React from "react";
import { connect } from "frontity";
import FeaturedMedia from "./../featured-media";
import Link from "../link";

const Item = ({ state, item }) => {
  return (
    <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
      <article className="mb-lg-0 mb-px-md-40 mb-px-20">
        <Link link={item.link}>
          <FeaturedMedia
            id={item.featured_media}
            className="mb-px-18 height-px-456 w-100 object-fit-cover"
          />
        </Link>
        <h5 className="product-title">
          <Link
            link={item.link}
            dangerouslySetInnerHTML={{
              __html: item.title.rendered,
            }}
          ></Link>
        </h5>
        <span className="price">
          <span className="amount">
            <span className="currencySymbol">{item.acf.price}</span>
          </span>
        </span>
        <div className="mt-px-14">
          <Link
            className="h6 btn-link border-2 border-bottom shop-button-style"
            link={item.link}
          >
            รายละเอียด
          </Link>
        </div>
      </article>
    </div>
  );
};

export default connect(Item);
