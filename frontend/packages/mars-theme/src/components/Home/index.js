import React, { useEffect } from "react";
import { connect } from "frontity";
import Banner from "./Banner";
import About from "./About";
import Eggs from "./Eggs";
import Products from "./Products";
import News from "./News";
import OurMenu from "./OurMenu";

const Home = ({ state, actions }) => {  
  const data = state.source.get("/pages/2").items;

  useEffect(() => {
    actions.source.fetch("/pages/2");
  }, []);

  return (
    <>
      <Banner
        bannerButton={data.acf.banner_button}
        bannerContent={data.acf.banner_content}
        bannerLists={data.acf.banner_lists}
        bannerSubtitle={data.acf.banner_subtitle}
        bannerTitle={data.acf.banner_title}
        bannerEditor={data.acf.banner_editor}
        carousels={data.acf.carousels}        
      />
      <About whatsEggsOrganic={data.acf.whats_eggs_organic} />
      <Eggs whatsManure={data.acf.whats_manure} />
      <Products />
      <News />
      <OurMenu
        ourMenusImage={data.acf.our_menus_image}
        howToShopping={data.acf.how_to_shopping}
        howToVisited={data.acf.how_to_visited}
      />
    </>
  );
};

export default connect(Home);
