import { connect } from "frontity";
import imgHomeH4 from "./../../assets/images/home/h4.jpg";
import imgFlowers18 from "./../../assets/images/flowers/f18.png";
import Link from "../link";

const Eggs = () => {
  return (
    <div className="bg-texture-image overflow-hidden">
      <div className="container pt-px-lg-150 pb-px-lg-150 pt-px-md-80 pb-px-md-80 pt-px-60 pb-px-60">
        <div className="row gx-lg-5">
          <div className="col-lg-6 order-lg-1">
            <div className="position-relative">
              <img
                className="mb-lg-0 mb-px-30 z-index-2 height-px-456 object-fit-cover w-100"
                src={imgHomeH4}
                alt="home image-4"
              />
              <img
                className="d-lg-block d-none z-index-3 position-absolute top-px-n-lg-16 end-px-n-lg-45"
                src={imgFlowers18}
                alt="f18 flower image"
              />
            </div>
          </div>
          <div className="col-lg-6 my-auto">
            <h5 className="font-letter-space mb-px-8">Go Organic</h5>
            <h2 className="mb-px-17">It’s always better when it’s natural.</h2>
            <div className="pe-px-lg-90 pb-px-6">
              <p>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam justo duo dolores et ea rebum.
              </p>
            </div>
            <Link className="btn btn-parsley" link="/">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(Eggs);
