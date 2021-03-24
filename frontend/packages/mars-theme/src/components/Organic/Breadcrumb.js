import React from "react";
import { connect } from "frontity";
import Link from "./../link";

const Breadcrumb = ({ state }) => {
  return (
    <div>
      <div className="bg-white-smoke">
        <div className="pt-px-8 pb-px-0">
          <div className="container mt-px-8">
            <div className="row text-center">
              <p className="font-size-14 font-weight-medium">
                Home /
                <Link link="/organic">
                  <span className="p font-size-14 font-weight-medium">
                    &nbsp; Organic
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(Breadcrumb);
