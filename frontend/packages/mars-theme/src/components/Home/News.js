import React, { useEffect } from "react";
import { connect } from "frontity";
import Link from "../link";
import FeaturedMedia from "./../featured-media";


const News = ({state, actions}) => {
  // Get information about the current URL.
  const data = state.source.get("/posts");
  
  useEffect(() => {
    actions.source.fetch("/posts");
  }, []);
  
  return (
    data.isPost && (
      <>
        <div className="bg-texture-image overflow-hidden pt-px-lg-120 pb-px-lg-120 pt-px-md-80 pb-px-md-70 pt-px-60 pb-px-50">
          <div className="text-center mb-px-lg-62 mb-px-lg-52 mb-px-40">
            <h3>บทความ</h3>
          </div>
          <div className="container pb-px-lg-66">
            <div className="row gx-lg-5 gy-lg-5 gy-3 gx-3 blog-post card-post-style">
              {data.items.map((item) => {
                return (
                  <div key={item.id} className="col-lg-4 mb-lg-0 mb-md-5 mb-4">
                    <article>
                      <figure className="entry-media">
                        <Link link={item.link}>
                          <FeaturedMedia
                            id={item.featured_media}
                            className="lozad height-px-320 object-fit-cover w-100"
                            dataLoaded="true"
                          />
                        </Link>
                        <span className="entry-meta-category">
                          <Link link={item.link}>{item.category_name}</Link>
                        </span>
                      </figure>
                      <div className="entry-content-wrapper bg-texture-image">
                        <header className="entry-header">
                          <Link link={item.link}>
                            <h5 className="mb-px-17 hover-color">
                              {item.title.rendered}
                            </h5>
                          </Link>
                          <div className="entry-meta-top"></div>
                        </header>
                        <div
                          className="entry-content"
                          dangerouslySetInnerHTML={{
                            __html: item.excerpt.rendered,
                          }}
                        ></div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-lg-5 mt-2">
              <Link className="btn btn-parsley" link="/posts">
                เพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default connect(News);
