/* components */
import Layout from "../components/Layout";
import Post from "../components/Post";
/* lib */
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

// build時に静的なhtmlを生成する
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
