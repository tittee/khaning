import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
// import FixBanner from "./FixBanner";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {/* {data.isTaxonomy && <FixBanner id={data.id} taxonomy={data.taxonomy} />} */}

      <div class="container mt-lg-8 mt-md-6 mt-5 pb-lg-8 pb-md-6 pb-5">
        <div class="row gx-lg-5 gy-lg-5 gy-3 gx-3 blog-post card-post-style posts-bg-white">
          {/* Iterate over the items of the list. */}
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section``;

const Header = styled.h3``;
