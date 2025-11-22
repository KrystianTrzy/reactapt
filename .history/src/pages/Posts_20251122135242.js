import LikeCounter from "../components/App/LikeCounter/LikeCounter";
import ThemeToggleButton from "../components/ThemeToggleButton";

function Posts() {
  return (
    <>
      <ThemeToggleButton />
      <h1>Latest posts</h1>
      <article>
        <div className="posts">
          <h1>witam</h1>
          <LikeCounter />
          <LikeCounter color="purple" title="1" description="1" count="5" />
          <LikeCounter title="2" description="2" count="2" />
          <LikeCounter title="3" description="3" count="8" />
        </div>
      </article>
    </>
  );
}
export default Posts;
