import { useEffect } from "react";
import { RelatedOrganic } from "../apis";

const useOrganic = ({ state, actions }) => {
  const getRelatedOrganic = (perPage) => {
    const posts = state.source.get("/organic/related/" + perPage);
    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
      actions.source.fetch("/organic/related/3");
    }, []);

    return posts;
  };

  return {
    getRelatedOrganic,
  };
};

export default useOrganic;
