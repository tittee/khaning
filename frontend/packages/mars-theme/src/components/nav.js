import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ state, libraries }) => {
  // const { items } = state.source.get("menus/primary-menu");
  const items = state.source.get("/menu/primary-menu/").items;

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="col-lg-2">
          <Link className="navbar-brand mx-auto d-none d-lg-block" link="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="43"
              viewBox="0 0 119 43"
            >
              <text
                id="Oganic"
                transform="translate(0 35)"
                fill="#2a5631"
                fontSize="32"
                fontFamily="PlayfairDisplay-Bold, Playfair Display"
                fontWeight="700"
                letterSpacing="-0.05em"
              >
                <tspan x="0" y="0">
                  KHANING
                </tspan>
              </text>
            </svg>
          </Link>
        </div>
        <div className="col-lg-8">
          <ul className="navbar-nav justify-content-lg-center">
            {items.map((item) => {
              if (!item.child_items) {
                return (
                  <li className="nav-item ml-0" key={item.ID}>
                    <Link className="nav-link pl-0" link={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              } else {
                const childItems = item.child_items;
                return (
                  <li
                    key={item.ID}
                    className="nav-item dropdown mega_menu_holder"
                  >
                    <Link className="nav-link dropdown-toggle" link="#">
                      {item.title}
                    </Link>
                    <div class="dropdown-menu">
                      {childItems.map((childItem) => {
                        return (
                          <Link
                            key={childItem.ID}
                            className="dropdown-item"
                            link={item.url}
                          >
                            <span className="">{childItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="col-lg-2 d-none d-lg-block">
          <ul className="list-unstyled nav-modules text-end">
            <li className="list-inline-item">
              <FontAwesomeIcon
                icon={faSearch}
                className="i h6 navbar-icon-size me-px-18 openBtn"
                onClick={() => console.log("ss")}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default connect(Nav);

const NavContainer = styled.nav``;

const NavItem = styled.div``;
