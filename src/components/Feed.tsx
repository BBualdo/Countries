import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

const Feed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      return data;
    },
  });

  console.log(data);

  let countries = [];

  if (data) {
    countries = data.map((country: { [key: string]: any }) => {
      return (
        <div className="bg-white cursor-pointer">
          <div>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
          <div className="p-6">
            <p className="h2 text-black" key={uuidv4()}>
              {country.name.common}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <p className="h4 text-black">
                <b>Population:</b> {country.population}
              </p>
              <p className="h4 text-black">
                <b>Region:</b> {country.region}
              </p>
              <p className="h4 text-black">
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="px-20 py-12">{countries}</section>
      )}
    </>
  );
};

export default Feed;
