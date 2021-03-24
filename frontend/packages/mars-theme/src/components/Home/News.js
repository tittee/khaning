import React, { useEffect } from "react";
import { connect } from "frontity";
import Link from "../link";
import Item from "../Single/Item";
// import Blog from "./../Blog"; 

const News = ({ state, actions }) => {
  // Get information about the current URL.
  const posts = state.source.get("/posts-home");
  const { items, isPost } = posts;  
  
  useEffect(() => {
    actions.source.fetch("/posts-home");
  }, []);


  return (
    
    posts.isPost ? (
      <div>
        <div className="bg-texture-image overflow-hidden pt-px-lg-120 pb-px-lg-120 pt-px-md-80 pb-px-md-70 pt-px-60 pb-px-50">
          <div className="text-center mb-px-lg-62 mb-px-lg-52 mb-px-40">
            <h3>บทความ</h3>
          </div>
          <div className="container pb-px-lg-0">
            <div className="row gx-lg-5 gy-lg-5 gy-3 gx-3 blog-post card-post-style">
              {items.map((item) => {
                return <Item key={item.id} item={item} isHome={true} />;
              })}
            </div>
            <div className="text-center mt-lg-5 mt-2">
              <Link className="btn btn-parsley" link="/posts">
                เพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default connect(News);
