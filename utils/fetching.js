import { notFound } from "next/navigation";

const FetchingDataFrom = async (url) => {
  const response = await fetch(url, {
    next: {
      revalidate: 120,
    },
  });

  if (!response.ok) {
    notFound();
    // throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.json();
};

export default FetchingDataFrom;
