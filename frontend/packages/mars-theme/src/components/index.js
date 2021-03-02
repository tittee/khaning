import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./Home";
import Footer from "./footer";

import styleCSS from "./../assets/css/style.css";
import bootstrapCSS from "./../assets/css/bootstrap.min.css";
import carouselCSS from "pure-react-carousel/dist/react-carousel.es.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(globalStyles)} /> 
      <Global styles={css(bootstrapCSS)} />                  
      <Global styles={css(carouselCSS)} />                  
      <Global styles={css(styleCSS)} />

      {/* Add the header of the site. */}      
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isArchive} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />

    </>
  );
};

export default connect(Theme);

const globalStyles = css`  
`;

const HeadContainer = styled.div``;

const Main = styled.div``;