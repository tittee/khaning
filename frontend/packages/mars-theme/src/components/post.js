import { useEffect } from "react";
import { connect, styled } from "frontity";

import List from "./list";
import Single from "./Single";
import Organic from "./Organic";

import useOrganic, { getRelatedOrganic } from "./../hooks/useOrganic";

const Post = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const { type, id } = data;
  // Get the data of the post.
  const post = state.source[type][id];
  /* Related Post by Custom Hooks */
  const { getRelatedOrganic } = useOrganic({
    state,
    actions,
  });
  const relatedItems = getRelatedOrganic(3);   

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
      {type === "post" && <Single post={post} />}
      {type === "organic" && (
        (
        <Organic post={post} relatedItems={relatedItems} />
      )
      )}
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div``;