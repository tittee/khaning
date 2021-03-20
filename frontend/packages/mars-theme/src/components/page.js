import { useEffect } from "react";
import { connect, styled } from "frontity";
import HeroImage from "./HeroImage";

/* Components */

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <div>
        <HeroImage post={post}></HeroImage>
      </div>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content className="container mt-px-lg-120 mb-px-lg-120 mt-px-md-80 mb-px-md-80 mt-px-60 mb-px-60">
        <Html2React html={post.content.rendered} />
      </Content>
    </Container>
  ) : null;
};

export default connect(Page);

const Container = styled.div``;
/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div``;
