import React, { useEffect } from "react";
import { connect } from "frontity";
/* Image Assets */
import imgComposition10 from "./../../assets/images/flowers/composition10.png";

const ContactUs = ({ state, actions, libraries, pageId }) => {
  // Get information about the current URL.
  const data = state.source.get("/acf/pages/" + pageId);

  useEffect(() => {
    actions.source.fetch("/acf/pages/" + pageId);
  }, []);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <div className="container my-lg-8 my-md-7 my-5">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-lg-5">
              <div className="position-relative">
                <Html2React html={data.acf.google_map_embed} />
                <img
                  className="z-index-flower d-lg-block d-none position-absolute top-px-lg-10 start-px-n-lg-36"
                  src={imgComposition10}
                  alt="Flower Composition 4"
                />
              </div>
              <div className="bg-texture-image py-4 px-4">
                <div className="py-3 px-3">
                  <h4 className="mb-4">We're here to help</h4>
                  <p className="mb-0">
                    If you have any questions about our website{" "}
                  </p>
                  please email web@email.com, fill out the form or call +44
                  650.800.3124.
                  <p className="mt-4">Monday to Friday, 10am-5pm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 my-auto">
              <div className="ms-px-lg-32 me-px-lg-40">
                <div className="pr-lg-5 pb-md-0">
                  <Html2React html={data.acf.contact_form_7} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(ContactUs);
