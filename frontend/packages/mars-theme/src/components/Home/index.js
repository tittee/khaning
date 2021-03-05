import { connect } from "frontity";
import Banner from "./Banner";
import About from "./About";
import Eggs from "./Eggs";
import Products from "./Products";
import Organic from "./Organic";
import Contact from "./Contact";

const Home = ({ state }) => {
  const data = state.source.get("/acf/pages/2").acf;

  return (
    <>
      <Banner data={data} />
      <About />
      <Eggs />
      <Products />
      <Organic />
      <Contact />
    </>
  );
};

export default connect(Home);