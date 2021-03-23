import { useEffect } from "react";
import { connect, styled } from "frontity";

import List from "./list";
import Single from "./Single";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const { type, id } = data;
  // Get the data of the post.
  const post = state.source[type][id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>               
      { type === 'post' && <Single post={post} /> }
      { type === 'organic' && <Single post={post} /> }     
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}           
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div``;



// const StyledLink = styled(Link)``;

const Author = styled.p``;

const DateWrapper = styled.p``;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div``;
