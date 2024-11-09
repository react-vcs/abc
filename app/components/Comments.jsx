import Image from "next/image";
import userPlaceholder from "../../public/userplaceholder.jpg";
const Comments = async ({ comments }) => {
  let data = await comments;
  return data.map((item) => {
    return (
      <article
        key={item?.id}
        className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
      >
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
              <Image
                className="mr-2 w-6 h-6 rounded-full"
                src={userPlaceholder}
                alt={item?.name}
                width={100}
                height={100}
                placeholder="blur"
              />
              {item?.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                {item?.email}
              </time>
            </p>
          </div>
        </footer>
        <p>{item?.body}</p>
      </article>
    );
  });
};

export default Comments;
