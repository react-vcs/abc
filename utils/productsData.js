const { default: FetchingDataFrom } = require("./fetching");
// Get ALL Posts
let getAllProducts = async () => {
  let data = await FetchingDataFrom("https://dummyjson.com/products");
  return data;
};
export { getAllProducts };
