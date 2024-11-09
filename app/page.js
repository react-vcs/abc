import Article from "@/app/components/Article";
import { getAllPosts } from "@/utils/postsData";
import Product from "./components/Product";
import { Suspense } from "react";
import { getAllProducts } from "@/utils/productsData";

const page = async () => {
  let data = await getAllPosts();
  let productDataObj = await getAllProducts();
  let productData = Object?.values(productDataObj)[0];

  return (
    <>
      <div>
        {/* Product Section  */}
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto  lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Products
              </h2>
            </div>
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {productData?.slice(0, 12)?.map((item) => (
                <Product item={item} key={item?.id} />
              ))}
            </div>
          </div>
        </section>
        {/* Blog Section  */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto  lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Blogs
              </h2>
            </div>
            <Suspense fallback="Loading Blogs">
              <div className="grid gap-8 lg:grid-cols-2">
                {data?.slice(0, 4)?.map((item) => (
                  <Article item={item} />
                ))}
              </div>
            </Suspense>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
