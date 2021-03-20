import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Page from "./page";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./Home";
import Footer from "./footer";

import styleCSS from "./../assets/css/style.css";
import bootstrapCSS from "./../assets/css/bootstrap.css";
import carouselCSS from "pure-react-carousel/dist/react-carousel.es.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const acf = state.source.get("/acf/options").acf;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <html lang="th" />
        <meta name="description" content={state.frontity.description} />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(globalStyles)} />
      <Global styles={css(bootstrapCSS)} />
      <Global styles={css(styleCSS)} />
      <Global styles={css(carouselCSS)} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header headerNotification={acf.header_notification} />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer acf={acf} />
    </>
  );
};

export default connect(Theme);

const globalStyles = css``;

const HeadContainer = styled.div``;

const Main = styled.div``;
