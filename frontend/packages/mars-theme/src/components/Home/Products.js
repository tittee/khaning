import React, { useEffect } from "react";
import { connect, styled } from "frontity";

import FeaturedMedia from "./../featured-media";
import Link from "../link";

const Products = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get("/organic");
  // Get the html2react component.
  // const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch("/organic");
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
        <div className="position-relative">
          <div className="text-center">
            <h3 className="mb-px-md-52 mb-px-40">สินค้าของเรา</h3>
          </div>
          <div className="row gx-lg-5 gy-lg-6 card-post-style">
            {data.items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40"
                >
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
            })}
          </div>
          <div className="text-center mt-px-lg-80">
            <Link className="btn btn-parsley" link="/organic">
              ดูทั้งหมด
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(Products);

const Content = styled.div``;