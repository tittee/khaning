import { connect } from "frontity";
import React, { useEffect } from "react";
import Banner from "./Banner";
import About from "./About";
import Eggs from "./Eggs";
import Products from "./Products";
import News from "./News";
import OurMenu from "./OurMenu";

const Home = ({ state, actions }) => {
  const data = state.source.get("/pages/2");

  const { isReady, items } = data;

  useEffect(() => {
    actions.source.fetch("/pages/2");
  }, []);

  return isReady ? (
    <>
      <Banner
        bannerButton={items.acf.banner_button}
        bannerContent={items.acf.banner_content}
        bannerLists={items.acf.banner_lists}
        bannerSubtitle={items.acf.banner_subtitle}
        bannerTitle={items.acf.banner_title}
        bannerEditor={items.acf.banner_editor}
        carousels={items.acf.carousels}
      />
      <About whatsEggsOrganic={items.acf.whats_eggs_organic} />
      <Eggs whatsManure={items.acf.whats_manure} />
      <Products />
      <News />
      <OurMenu
        ourMenusImage={items.acf.our_menus_image}
        howToShopping={items.acf.how_to_shopping}
        howToVisited={items.acf.how_to_visited}
      />
    </>
  ) : null;
};

export default connect(Home);
