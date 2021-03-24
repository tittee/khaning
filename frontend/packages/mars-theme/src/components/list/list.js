import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import HeroImage from "./../HeroImage";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const post = {
    featured_media: 128,
    type: "Category",
    title: {
      rendered: "บทความของฟาร์ม",
    },
    excerpt: {
      rendered:
        "สามารถติดตามข่าวสาร หรรือกิจกรรมดีๆ ของ ฟาร์มคะนิ้งไข่ไก่อออร์แกนิค ได้ที่เว็บไซต์หรือ Facebook Fanpage",
    },
  };

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {/* {data.isTaxonomy && <FixBanner id={data.id} taxonomy={data.taxonomy} />} */}
      <HeroImage post={post}></HeroImage>

      <div className="container mt-lg-8 mt-md-6 mt-5 pb-lg-8 pb-md-6 pb-5">
        <div className="row gx-lg-5 gy-lg-5 gy-3 gx-3 blog-post card-post-style posts-bg-white">
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
