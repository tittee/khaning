import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import SingleItem from "../Single/Item";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  return (
    <>
      <SingleItem key={item.id} item={item} isHome={false} />      
    </>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1``;

const AuthorName = styled.span``;

const StyledLink = styled(Link)``;

const PublishDate = styled.span``;

const Excerpt = styled.div``;
