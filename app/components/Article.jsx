import Link from "next/link";

const Article = ({ item }) => {
  return (
    <article
      key={item?.id}
      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item?.title}
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        Static websites are now used to bootstrap lots of websites and are
        becoming the basis for a variety of tools that even influence both web
        designers and developers influence both web designers and developers.
      </p>
      <div className="flex justify-end">
        <Link
          href={`posts/${item?.id}`}
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default Article;
