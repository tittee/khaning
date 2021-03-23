import React from "react";
import { connect } from "frontity";

const PostContent = ({ state, libraries, content }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return <Html2React html={content.rendered} />;
};

export default connect(PostContent);
