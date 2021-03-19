import { connect } from "frontity";
import Banner from "./Banner";
import About from "./About";
import Eggs from "./Eggs";
import Products from "./Products";
import News from "./News";
import OurMenu from "./OurMenu";

const Home = ({ state }) => {
  const data = state.source.get("/acf/pages/2").acf;

  return (
    <>
      <Banner data={data} />
      <About whatsEggsOrganic={data.whats_eggs_organic} />
      <Eggs whatsManure={data.whats_manure} />
      <Products />
      <News />
      <OurMenu
        ourMenusImage={data.our_menus_image}
        howToShopping={data.how_to_shopping}
        howToVisited={data.how_to_visited}
      />
    </>
  );
};

export default connect(Home);