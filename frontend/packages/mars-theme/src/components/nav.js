import { connect, styled } from "frontity";
import Link from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ state }) => (
  <>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <div className="col-lg-2">
        <Link
          className="navbar-brand mx-auto d-none d-lg-block"
          link="/"
        >
          KHANING
        </Link>
      </div>
      <div className="col-lg-8">
        <ul className="navbar-nav justify-content-lg-center">
          {state.theme.menu.map(([name, link]) => {
            // Check if the link matched the current page url
            const isCurrentPage = state.router.link === link;
            return (
              <li key={name} className="nav-item ml-0">
                {/* If link url is the current page, add `aria-current` for a11y */}
                <Link
                  link={link}
                  className="nav-link pl-0"
                  aria-current={isCurrentPage ? "page" : undefined}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          {/* <li class="nav-item dropdown mega_menu_holder"><a class="nav-link dropdown-toggle" link="#"
                  data-bs-toggle="dropdown">Blog</a>
                <div class="dropdown-menu"><a class="dropdown-item" link="blog.html">Blog</a><a class="dropdown-item"
                    link="blog-single-post.html">Single Post</a>
              </li> */}
        </ul>
      </div>
      <div className="col-lg-2 d-none d-lg-block">
        <ul className="list-unstyled nav-modules text-end">
          <li className="list-inline-item">
            <FontAwesomeIcon
              icon={faSearch}
              className="i h6 navbar-icon-size me-px-18 openBtn"
              onClick="openSearch()"
            />
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default connect(Nav);

const NavContainer = styled.nav`
`;

const NavItem = styled.div`
`;
