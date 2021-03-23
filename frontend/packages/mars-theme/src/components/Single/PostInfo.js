import React from "react";
import { connect, styled } from "frontity";
import { PropTypes } from "prop-types";

const PostInfo = ({ state, date, title }) => {
  return (
    <div>
      <div className="col-lg-6 offset-lg-3">
        <div className="text-center">
          <div className="entry-meta-top">
            <span className="entry-meta-date">{date.toDateString()}</span>
          </div>
          <Title
            className="mb-0"
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
        </div>
      </div>
    </div>
  );
};

PostInfo.propTypes = {
  date: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
};

export default connect(PostInfo);

const Title = styled.h1``;
