import { useQuery } from "@tanstack/react-query";

const Feed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = response.json();
      return data;
    },
  });

  console.log(data);

  return <section className="px-20 py-12">Feed</section>;
};

export default Feed;
