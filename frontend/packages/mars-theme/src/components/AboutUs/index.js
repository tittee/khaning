import React, { useEffect } from "react";
import { connect, styled } from "frontity";

const AboutUs = ({ state }) => {
  return (
    <div>
      <div className="container mt-lg-9 mt-md-7 mt-4">
        <div className="row gx-lg-5">
          <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4">
            <div className="position-relative">
              <img
                className="z-index-back height-px-750 w-100 object-fit-cover"
                src="assets/images/about-us/a2.jpg"
                alt="about-us-2"
              />
              <img
                className="z-index-flower d-lg-block d-none position-absolute top-px-lg-5 start-px-n-lg-44"
                src="assets/images/flowers/f11.png"
                alt="f11 flower image"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-lg-auto">
            <div className="ms-px-lg-52">
              <h5 className="font-letter-space mb-px-6">History</h5>
              <h4 className="mb-px-md-20 mb-3">1995 Beginning of Male</h4>
              <p className="mt-n1 mb-px-28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent gravida magna ut diam varius, vitae mattis neque
                tempus. Maecenas id tortor ac augue commodo rutrum. Sed in
                tempor urna. Aenean porttitor velit neque, vel efficitur nulla
                vehicula eget.
              </p>{" "}
              Mauris finibus magna ut urna euismod viverra. Praesent eu mi
              volutpat, consectetur mi sit amet, varius mi. Curabitur ligula ut
              massa ullamcorper dictum. Donec et justo semper, rutrum libero a,
              lobortis odio.
              <div className="row gx-lg-3 mt-px-md-62 mt-px-40">
                <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4">
                  <img
                    className="height-px-382 w-100 object-fit-cover"
                    src="assets/images/about-us/a3.jpg"
                    alt="about-us-2"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    className="height-px-382 w-100 object-fit-cover"
                    src="assets/images/about-us/a4.jpg"
                    alt="about-us-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-px-lg-150 mb-px-lg-150 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
        <div className="row gx-lg-5 pt-px-lg-15 pb-px-lg-29">
          <div className="col-lg-4 mb-lg-0 mb-px-md-40 mb-px-30">
            <div className="text-center">
              <img
                className="mb-px-27"
                src="assets/images/logo7.png"
                alt="logo4"
              />
              <h5 className="mb-px-18">Farm raised food</h5>
              <div className="px-2">
                <p className="mb-0">
                  Pellentesque habitant tristique senectus et netus et malesuada
                  ac turpis egestas. Suspendisse vel orci quis metus aliquam
                  porta a eu dui. Integer tempor enim non nibh convallis
                  maximus.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-px-md-40 mb-px-30">
            <div className="text-center">
              <img
                className="mb-px-27"
                src="assets/images/logo8.png"
                alt="logo4"
              />
              <h5 className="mb-px-18">100% organic food</h5>
              <div className="px-2">
                <p className="mb-0">
                  Pellentesque habitant tristique senectus et netus et malesuada
                  ac turpis egestas. Suspendisse vel orci quis metus aliquam
                  porta a eu dui. Integer tempor enim non nibh convallis
                  maximus.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <img
                className="mb-px-27"
                src="assets/images/logo9.png"
                alt="logo4"
              />
              <h5 className="mb-px-18">Grown naturally</h5>
              <div className="px-2">
                <p className="mb-0">
                  Pellentesque habitant tristique senectus et netus et malesuada
                  ac turpis egestas. Suspendisse vel orci quis metus aliquam
                  porta a eu dui. Integer tempor enim non nibh convallis
                  maximus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gx-lg-3">
          <div className="col-lg-4">
            <img
              className="mb-lg-0 mb-md-5 mb-4 height-px-614 w-100 object-fit-cover"
              src="assets/images/about-us/a5.jpg"
              alt="about-us-5"
            />
          </div>
          <div className="col-lg-4">
            <img
              className="mb-lg-0 mb-md-5 mb-4 height-px-614 w-100 object-fit-cover"
              src="assets/images/about-us/a6.jpg"
              alt="about-us-6"
            />
          </div>
          <div className="col-lg-4">
            <img
              className="height-px-614 w-100 object-fit-cover"
              src="assets/images/about-us/a7.jpg"
              alt="about-us-7"
            />
          </div>
        </div>
      </div>
      <div className="mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-70 mt-px-20 mb-px-50">
        <div className="container pb-px-lg-66">
          <div className="row gx-lg-5">
            <div className="col-lg-6 order-lg-1">
              <div className="ms-px-lg-32">
                <div className="position-relative">
                  <div className="ms-px-lg-151 me-lg-0 me-px-md-150">
                    <div className="ps-px-lg-30 pe-lg-0 pe-px-md-70">
                      <img
                        className="mb-md-0 mb-px-20 height-px-550 object-fit-cover w-100"
                        src="assets/images/about-us/a8.jpg"
                        alt="about-us image-8"
                      />
                      <img
                        className="z-index-flower d-md-block d-none position-absolute top-px-n-lg-0 end-px-n-lg-44 top-px-n-md-15 end-px-n-md-10"
                        src="assets/images/flowers/f8.png"
                        alt="f8 flower image"
                      />
                    </div>
                  </div>
                  <div className="position-md-absolute top-0 end-0">
                    <div className="me-px-lg-101 ms-px-md-150 ms-lg-0 mt-px-lg-150 mt-px-md-120">
                      <div className="pe-px-lg-85 ps-lg-0 ps-px-md-70 pt-px-lg-70">
                        <img
                          className="height-px-460 object-fit-cover w-100"
                          src="assets/images/about-us/a9.jpg"
                          alt="about-us image-9"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="position-relative">
                <div className="mt-px-lg-84 mt-px-md-150 mt-px-30">
                  <h5 className="font-letter-space mb-px-8">Go Organic</h5>
                  <h2 className="mb-px-17">
                    It’s always better when it’s natural.
                  </h2>
                  <div className="pe-px-lg-90 pb-px-6">
                    <p>
                      Stet clita kasd gubergren, no sea takimata sanctus est
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt.
                    </p>
                  </div>
                  <div className="row mt-px-lg-30 mt-px-20">
                    <div className="col-md-6 mb-md-0 mb-3">
                      <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing. Cras
                        maximus, dolor nec placerat scelerisque.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing. Cras
                        maximus, dolor nec placerat scelerisque.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-px-lg-35 mt-px-20">
                    <div className="col-md-6 mb-md-0 mb-3">
                      <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing. Cras
                        maximus, dolor nec placerat scelerisque.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="mb-px-18">1. Eat good, Feel good</h6>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing. Cras
                        maximus, dolor nec placerat scelerisque.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="d-lg-block d-none position-absolute top-px-40 start-px-n-77"
                  src="assets/images/flowers/f9.png"
                  alt="f9 flower image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(AboutUs);
