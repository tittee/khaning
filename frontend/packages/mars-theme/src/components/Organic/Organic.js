import React from "react";
import Link from "./../link";
import Breadcrumb from "./Breadcrumb";
import Carousel from "./Carousel";
import Description from "./Description";
import Item from "./Item";

const Organic = ({ state, post, relatedItems }) => {
  const { title, excerpt, content, acf, featured_media } = post;

  return (
    <article className="entry">
      <div className="entry-content">
        <Breadcrumb />

        <div className="bg-texture-image">
          <div className="container pt-px-lg-100 pt-px-md-80 pt-px-60 pb-px-lg-100 pb-px-md-80 pb-px-60">
            <div className="row gx-lg-5">
              <div className="col-lg-6 order-lg-1">
                <Carousel title={title} featuredMedia={featured_media} />
              </div>
              <div className="col-lg-6 mt-lg-4 mt-md-5 mt-5">
                <h1
                  className="mb-px-26"
                  dangerouslySetInnerHTML={{ __html: title.rendered }}
                ></h1>
                <h4 className="montserrat-family mb-px-27 text-flame-pea">
                  {acf.price}
                </h4>
                {excerpt && (
                  <div className="pe-lg-6">
                    <div
                      dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                    ></div>
                  </div>
                )}
                <div className="pb-px-43 pt-px-29">
                  <div className="row gx-0">
                    <div className="col-6">
                      <Link className="btn btn-parsley" link="#">
                        Lazada
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Description content={content} />

        {relatedItems.isReady ? (
          <>
            <div className="container mt-px-lg-100 mt-px-md-80 mt-px-60 mb-5">
              <h2 className="text-center">Related Products</h2>
            </div>
            <div className="container mb-px-lg-120 mb-px-md-20 mb-px-60">
              <div className="row gx-lg-5 gy-lg-6 card-post-style">
                {relatedItems.items.map((item) => {
                  return <Item key={item.id} item={item} />;
                })}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </article>
  );
};

export default Organic;
