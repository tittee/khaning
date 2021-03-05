import { connect, styled } from "frontity";
import Nav from "./nav";
import Link from "./link";
// import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <div className="bg-bay-leaf py-2">
        <div className="continer">
          <Link className="text-center" link="#">
            <p className="font-size-14 text-white mb-0">
              Frontity + WordPress Sage Theme | เลี่ยงได้หลังบ้านก็ไปใช้
             
             
             
              Node.JSเถอะ
              <span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </p>
          </Link>
        </div>
      </div>

      <div className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light pe-lg-7 ps-lg-6 px-4">
          <div className="container-fluid px-0">
            <Link
              className="navbar-brand text-center d-md-block d-lg-none"
              href="index.html"
            >
              KHANING
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Nav />
          </div>
        </nav>
      </div>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div``;

const Title = styled.h2``;

const Description = styled.h4``;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
