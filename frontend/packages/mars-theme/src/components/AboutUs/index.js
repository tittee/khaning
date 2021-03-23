import React, { useEffect } from "react";
import { connect } from "frontity";

const AboutUs = ({ state, actions, libraries, pageId }) => {
  const data = state.source.get("/pages/" + pageId);
  const { items } = data;

  useEffect(() => {
    actions.source.fetch("/pages/" + pageId);
  }, []);

  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <div className="container mt-lg-9 mt-md-7 mt-4 mb-lg-9 mb-md-7 mb-4">
        <div className="row gx-lg-5 justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative">
              <Html2React html={items.content.rendered} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(AboutUs);
