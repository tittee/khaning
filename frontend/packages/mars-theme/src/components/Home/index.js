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
      <About whats_eggs_organic={data.whats_eggs_organic} />
      <Eggs />
      <Products />
      <News />
      <OurMenu />
    </>
  );
};

export default connect(Home);