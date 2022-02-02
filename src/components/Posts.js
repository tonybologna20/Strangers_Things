const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Posts;
