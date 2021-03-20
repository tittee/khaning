import { connect } from "frontity";
import imgComposition1 from "./../../assets/images/flowers/composition1.png";
import Link from "../link";

const Eggs = ({ whatsManure }) => {
  return (
    <div className="bg-texture-image overflow-hidden">
      <div className="container pt-px-lg-150 pb-px-lg-150 pt-px-md-80 pb-px-md-80 pt-px-60 pb-px-60">
        <div className="row gx-lg-5">
          <div className="col-lg-6 order-lg-1">
            <div className="position-relative">
              <img
                className="mb-lg-0 mb-px-30 z-index-2 height-px-456 object-fit-cover w-100"
                src={whatsManure.image.url}
                alt={whatsManure.image.alt}
              />
              <img
                className="d-lg-block d-none z-index-3 position-absolute top-px-n-lg-16 end-px-n-lg-70"
                src={imgComposition1}
                alt="f18 flower image"
              />
            </div>
          </div>
          <div className="col-lg-6 my-auto">            
            { whatsManure.sub_title && <h5 className="font-letter-space mb-px-8">{whatsManure.sub_title}</h5> }
            <h2 className="mb-px-17">{whatsManure.title}</h2>
            { whatsManure.description && 
            <div className="pe-px-lg-90 pb-px-6">
              <p>
                { whatsManure.description }
              </p>
            </div>
            }
            <Link className="btn btn-parsley" link={ whatsManure.button.url }>
              { whatsManure.button.title }
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(Eggs);
