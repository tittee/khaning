import React from "react";

const Organic = ({ state }) => {
  return (
    <article className="entry">
      <div className="entry-content">
        <div className="bg-white-smoke">
          <div className="pt-px-8 pb-px-0">
            <div className="container mt-px-8">
              <div className="row text-center">
                <p className="font-size-14 font-weight-medium">
                  Home /
                  <a href="shop.html">
                    <span className="p font-size-14 font-weight-medium">
                      {" "}
                      Chair /
                    </span>
                  </a>
                  <span className="p font-size-14 font-weight-medium">
                    {" "}
                    The Mango lounge chair
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-texture-image">
          <div className="container pt-px-lg-100 pt-px-md-80 pt-px-60 pb-px-lg-100 pb-px-md-80 pb-px-60">
            <div className="row gx-lg-5">
              <div className="col-lg-6 order-lg-1">
                <div className="position-relative">
                  <img src="assets/images/shop/s1.jpg" alt="shop" />
                  <div className="row mt-4 z-index-flower">
                    <div className="col-3">
                      <img src="assets/images/shop/s1.jpg" alt="shop" />
                    </div>
                    <div className="col-3">
                      <img src="assets/images/shop/s2.jpg" alt="shop" />
                    </div>
                    <div className="col-3">
                      <img src="assets/images/shop/s3.jpg" alt="shop" />
                    </div>
                    <div className="col-3">
                      <img src="assets/images/shop/s4.jpg" alt="shop" />
                    </div>
                  </div>
                  <img
                    className="d-lg-block d-none position-absolute top-px-lg-15 end-px-n-lg-40"
                    src="assets/images/flowers/f8.png"
                    alt="f8 flower image"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-lg-4 mt-md-5 mt-5">
                <h1 className="mb-px-26">Organic Wrap</h1>
                <h4 className="montserrat-family mb-px-27 text-flame-pea">
                  $600
                </h4>
                <div className="row mb-px-5">
                  <div className="col-3">
                    <i className="fas fa-star text-parsley"></i>
                    <i className="fas fa-star text-parsley"></i>
                    <i className="fas fa-star text-parsley"></i>
                    <i className="fas fa-star text-parsley"></i>
                    <i className="far fa-star text-parsley"></i>
                  </div>
                  <div className="col-6">
                    <p>(20 customer reviews) </p>
                  </div>
                </div>
                <div className="pe-lg-6">
                  <p>
                    Quisque eu quam venenatis, luctus eros ut, efficitur lectus.
                    Maecenas sollicitudin tempor ante, id euismod mi ornare
                    eget. Nunc nec hendrerit eros. Nulla facilisi. Fusce eget
                    posuere dolor. Vestibulum et luctus lacus. Suspendisse nec
                    erat eu ex lacinia luctus.
                  </p>
                </div>
                <div className="pb-px-43 pt-px-29">
                  <form action="/action_page.php">
                    <div className="row gx-0">
                      <div className="col-1">
                        <input
                          className="form-control number-border border-2 border-flame-pea px-0"
                          id="quantity"
                          type="number"
                          name="quantity"
                          min="1"
                          max="500"
                          placeholder="1"
                        />
                      </div>
                      <div className="col-6">
                        <a className="btn btn-parsley" href="#">
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
                <p className="mb-0">SKU: 00489</p>
                <p className="mb-0">Category: Machine</p>
                <p className="mb-0">Tag: In Stock</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-texture-image pt-px-lg-120 pt-px-md-80 pt-px-60 pb-px-lg-100 pb-px-md-70 pb-px-50 border-top border-white-linen">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link active me-lg-6"
                      id="nav-Description-tab"
                      data-bs-toggle="tab"
                      href="#nav-Description"
                      role="tab"
                      aria-controls="nav-Description"
                      aria-selected="true"
                    >
                      Description
                    </a>
                    <a
                      className="nav-link me-lg-6"
                      id="nav-Additional-information-tab"
                      data-bs-toggle="tab"
                      href="#nav-Additional-information"
                      role="tab"
                      aria-controls="nav-Additional-information"
                      aria-selected="false"
                    >
                      Additional information
                    </a>
                    <a
                      className="nav-link me-lg-6"
                      id="nav-Reviews-tab"
                      data-bs-toggle="tab"
                      href="#nav-Reviews"
                      role="tab"
                      aria-controls="nav-Reviews"
                      aria-selected="false"
                    >
                      Reviews (1)
                    </a>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-Description"
                      role="tabpanel"
                      aria-labelledby="nav-Description-tab"
                    >
                      <div className="pe-lg-6 pt-lg-5 pt-md-4 pt-4">
                        <h5 className="font-family-base font-weight-bold mb-4">
                          Description{" "}
                        </h5>
                        <p>
                          Aliquam a feugiat sem. Duis sit amet mollis nibh,
                          vitae venenatis lectus. Praesent porta diam quis lacus
                          commodo ornare. Nulla facilisi. Nam risus lacus,
                          vulputate a nunc nec, bibendum aliquam dolor.
                          Vestibulum finibus consequat orci at tincidunt.
                          Pellentesque eu eros in sem ultricies interdum. In
                          facilisis quam id tellus pretium fermentum.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-Additional-information"
                      role="tabpanel"
                      aria-labelledby="nav-Additional-information-tab"
                    >
                      <div className="pe-lg-6 pt-lg-5 pt-md-4 pt-4">
                        <h5 className="font-family-base font-weight-bold mb-4">
                          Additional Information
                        </h5>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td className="col-lg-2 text-center h6">Size</td>
                              <td className="col-lg-10">
                                Small , Medium , Large
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade font-family-base font-weight-bold"
                      id="nav-Reviews"
                      role="tabpanel"
                      aria-labelledby="nav-Reviews-tab"
                    >
                      <div className="pe-lg-6 pt-lg-5 pt-md-4 pt-4">
                        <h5 className="mb-4">
                          1 Review From The Mango lounge chair
                        </h5>
                        <p className="mb-0">Add a Review</p>
                        <p className="mb-0">Your Rating</p>
                        <i className="fas fa-star text-parsley"></i>
                        <i className="fas fa-star text-parsley"></i>
                        <i className="fas fa-star text-parsley"></i>
                        <i className="fas fa-star text-parsley"></i>
                        <i className="fas fa-star text-parsley"></i>
                        <form
                          id="contact-form"
                          method="post"
                          action="assets/php/contact.php"
                        >
                          <div className="mb-4 pb-2">
                            <textarea
                              className="form-control footer-input ps-px-15 border-dim-grey"
                              id="form_message"
                              name="message"
                              placeholder="Your Review"
                              rows="5"
                              required
                            ></textarea>
                          </div>
                          <div className="mb-4">
                            {" "}
                            <a className="btn btn-parsley" href="#">
                              Submit
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-px-lg-100 mt-px-md-80 mt-px-60 mb-5">
          <h2 className="text-center">Related Products</h2>
        </div>
        <div className="container mb-px-lg-120 mb-px-md-20 mb-px-60">
          <div className="row gx-lg-5 gy-lg-6 card-post-style">
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <a href="single-product.html">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src="assets/images/shop/s1.jpg"
                    alt="s1 image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="single-product.html">
                    Taco with meat and vegetables
                  </a>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$15.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    href="single-product.html"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <a href="single-product.html">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src="assets/images/shop/s2.jpg"
                    alt="s2 image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="single-product.html">Sala dwith Grilled squids </a>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$20.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    href="single-product.html"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-px-md-50 mb-px-40">
              <article className="mb-lg-0 mb-px-md-40 mb-px-20">
                <a href="single-product.html">
                  <img
                    className="mb-px-18 height-px-456 w-100 object-fit-cover"
                    src="assets/images/shop/s3.jpg"
                    alt="s3 image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="single-product.html">Chicken burrito</a>
                </h5>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$21.99</span>
                  </span>
                </span>
                <div className="mt-px-14">
                  <a
                    className="h6 btn-link border-2 border-bottom shop-button-style"
                    href="single-product.html"
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="overlay" id="myOverlay">
          <span
            className="closebtn"
            onclick="closeSearch()"
            title="Close Overlay"
          >
            &times;
          </span>
          <div className="overlay-content">
            <form action="#">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div
          className="modal fade"
          id="checkout-modal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="container-fluid mt-8">
            <div className="row">
              <div className="col-lg-6 offset-6">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h3 className="text-center mb-4 mt-3">Check Out Item</h3>
                      <table className="table mb-2 table-bordered bg-white-smoke">
                        <thead>
                          <tr className="text-black text-center align-middle">
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-black text-center align-middle">
                            <td>
                              {" "}
                              <img
                                className="height-px-50 object-fit-cover"
                                src="assets/images/shop/s3.jpg"
                                alt="Shop3"
                              />
                            </td>
                            <td>350$</td>
                            <td>2</td>
                            <td>20$</td>
                            <td>330$</td>
                          </tr>
                          <tr className="text-black text-center align-middle">
                            <td>
                              {" "}
                              <img
                                className="height-px-50 object-fit-cover"
                                src="assets/images/shop/s4.jpg"
                                alt="Shop3"
                              />
                            </td>
                            <td>250$</td>
                            <td>3</td>
                            <td>15$</td>
                            <td>235$</td>
                          </tr>
                          <tr className="text-black text-center align-middle">
                            <td>
                              {" "}
                              <img
                                className="height-px-50 object-fit-cover"
                                src="assets/images/shop/s5.jpg"
                                alt="Shop3"
                              />
                            </td>
                            <td>150$</td>
                            <td>4</td>
                            <td>10$</td>
                            <td>140$ </td>
                          </tr>
                          <tr className="text-black text-center align-middle text-center">
                            <td className="font-weight-bold">Grand Total</td>
                            <td
                              className="text-end font-weight-bold"
                              colspan="4"
                            >
                              705${" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer border-0">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Add items
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="user-login"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="container-fluid mt-8">
            <div className="row">
              <div className="col-lg-4 offset-8">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-lg-11">
                          <h3 className="mb-4 mt-1">
                            Subscription account For Hanan
                          </h3>
                        </div>
                        <div className="col-lg-1 my-auto">
                          <div className="ms-n1">
                            <button
                              className="btn btn-black close rounded-0 px-2 py-2"
                              type="button"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <form>
                        <div className="form-group">
                          <input
                            className="form-control input-border"
                            id="user-name"
                            type="text"
                            placeholder="User name"
                          />
                        </div>
                        <div className="form-group mt-4">
                          <input
                            className="form-control input-border"
                            id="Pasword-name"
                            type="password"
                            placeholder="********"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer border-0">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Register
                      </button>
                      <button
                        className="btn btn-black"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Organic;
