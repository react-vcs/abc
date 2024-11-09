const { default: FetchingDataFrom } = require("./fetching");
// Get ALL Posts
let getAllPosts = async () => {
  let data = await FetchingDataFrom(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};
// Get Single Post
let getSinglePost = async (id) => {
  let data = await FetchingDataFrom(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
// Get Post Comments
let getSinglePostComments = async (id) => {
  let data = await FetchingDataFrom(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
};
export { getAllPosts, getSinglePost, getSinglePostComments };
