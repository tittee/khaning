import React from "react";
import { connect } from "frontity";
import PropTypes from "prop-types";
import Link from "./../link";

const Description = ({ state, content }) => {
  return (
    <div className="bg-texture-image pt-px-lg-120 pt-px-md-80 pt-px-60 pb-px-lg-100 pb-px-md-70 pb-px-50 border-top border-white-linen">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <Link
                  className="nav-link active me-lg-6"
                  id="nav-Description-tab"
                  data-bs-toggle="tab"
                  link="#nav-Description"
                  role="tab"
                  aria-controls="nav-Description"
                  aria-selected="true"
                >
                  รายละเอียด
                </Link>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-Description"
                  role="tabpanel"
                  aria-labelledby="nav-Description-tab"
                >
                  <div className="pe-lg-6 pt-lg-5 pt-md-4 pt-4">
                    {content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.rendered,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

Description.propTypes = {
  content: PropTypes.object.isRequired,
};

export default connect(Description);
