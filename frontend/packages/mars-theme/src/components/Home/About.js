import { connect } from "frontity";
import imgComp7 from "./../../assets/images/flowers/composition7.png";
import Link from "../link";

const About = ({ whatsEggsOrganic }) => {
  const lastItem = whatsEggsOrganic.lists.length;

  return (
    <div className="container mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
      <div className="row gx-lg-5">
        <div className="col-lg-6 mb-lg-0 mb-px-30">
          <div className="position-relative">
            <img
              className="z-index-3 height-px-780 w-100 object-fit-cover"
              src={whatsEggsOrganic.image.url}
              alt={whatsEggsOrganic.image.alt}
            />
            <img
              className="z-index-flower position-absolute top-px-9 start-0 translate-middle"
              src={imgComp7}
              alt="ไข่ไก่ออร์แกนิค พระราม 2"
            />
          </div>
        </div>
        <div className="col-lg-6 my-auto">
          <div className="ms-px-lg-32">
            {whatsEggsOrganic.sub_title && (
              <h3 className="font-letter-space mb-px-8">
                {whatsEggsOrganic.sub_title}
              </h3>
            )}
            <h2 className="mb-px-17">{whatsEggsOrganic.title}</h2>
            {whatsEggsOrganic.description && (
              <div className="pe-px-lg-40 pb-px-36">
                <p>{whatsEggsOrganic.description}</p>
              </div>
            )}
            {whatsEggsOrganic.lists && (
              <div className="pe-px-lg-60">
                {whatsEggsOrganic.lists.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`row gx-lg-0 ${
                        lastItem === index + 1 ? null : "mb-px-md-45 mb-px-30"
                      }`}
                    >
                      <div className="col-3">
                        <img src={item.image.url} alt={item.image.alt} />
                      </div>
                      <div className="col-9">
                        <div className="ms-px-10">
                          <h5 className="mb-px-12">{item.title}</h5>
                          <p className="mb-0">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(About);
