import Article from "@/app/components/Article";
import { getAllPosts } from "@/utils/postsData";

export const metadata = {
  title: "Posts | ShopPost - Your Hub for Products and Content",
  description:
    "Discover a wide range of products and posts in one place. ShopPost brings you a seamless shopping and reading experience, with fast loading, responsive design, and optimized SEO.",
};

const page = async () => {
  let data = await getAllPosts();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            All Blogs
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {data?.map((item) => (
            <Article item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
