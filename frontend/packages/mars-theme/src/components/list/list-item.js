import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Blog from "../Blog";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  return (
    <>    
          <Blog item={item} />          
      {/* <article>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

        <div>          
          {author && (
            <StyledLink link={author.link}>
              <AuthorName>
                By <b>{author.name}</b>
              </AuthorName>
            </StyledLink>
          )}
          <PublishDate>
            {" "}
            on <b>{date.toDateString()}</b>
          </PublishDate>
        </div>

        
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
        )}

        
        {item.excerpt && (
          <Excerpt
            dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
          />
        )}
      </article> */}
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
