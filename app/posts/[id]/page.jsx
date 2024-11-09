import Comments from "@/app/components/Comments";
import {
  getAllPosts,
  getSinglePost,
  getSinglePostComments,
} from "@/utils/postsData";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  let { id } = await params;
  let data = await getSinglePost(id);
  return {
    title: `Post | ${data?.title}`,
    description: data?.body,
  };
}

const page = async ({ params }) => {
  let { id } = await params;
  let data = await getSinglePost(id);
  let commentsData = getSinglePostComments(id);
  return (
    <section id="blogSingle">
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {data?.title}
              </h1>
            </header>
            <p className="lead">{data?.body}</p>
            <br />
            <br />
            <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion (20)
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={6}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Post comment
                </button>
              </form>
              {/* Comments  */}
              <Suspense fallback="Loading Comments ..">
                <Comments comments={commentsData} />
              </Suspense>
            </section>
          </article>
        </div>
      </main>
    </section>
  );
};

export async function generateStaticParams() {
  let data = await getAllPosts();
  return data.map((item) => ({ id: item?.id.toString() }));
}

export default page;
