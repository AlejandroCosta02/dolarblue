import EachPost from "./components/EachPost";
import HeroBlog from "./components/HeroBlog";
import { posts } from "./posts.json";
interface Post {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  slug: string;
}
function Blog() {
  return (
    <>
      <HeroBlog />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-12">
        {posts.map((post) => (
          <EachPost
            key={post.id}
            title={post.title}
            imgSrc={post.imgSrc}
            description={post.description}
            slug={post.title}
          />
        ))}
      </div>
      {/* <EachPost /> */}
    </>
  );
}

export default Blog;
