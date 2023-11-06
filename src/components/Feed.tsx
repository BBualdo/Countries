import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Filters from "./Filters";

const Feed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      return data;
    },
  });

  let countries = [];

  console.log(data);

  if (data) {
    countries = data.map((country: { [key: string]: any }) => {
      return (
        <Link
          to={`/${country.cca3}`}
          key={uuidv4()}
          className="bg-white cursor-pointer shadow-[0_0_7px_2px_rgba(0,0,0,0.06)]"
        >
          <div className="sm:h-[160px]">
            <img
              className="sm:h-full w-full"
              src={country.flags.png}
              alt={country.name.common}
            />
          </div>
          <div className="p-6">
            <p className="h2 text-black">{country.name.common}</p>
            <div className="flex flex-col gap-2 mt-4">
              <p className="h4 text-black">
                <b>Population:</b>{" "}
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p className="h4 text-black">
                <b>Region:</b> {country.region}
              </p>
              <p className="h4 text-black">
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <>
      {isLoading ? (
        <section className="px-20 py-12">Loading...</section>
      ) : (
        <>
          <Filters />
          <section className="px-20 py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[72px] gap-y-[72px]">
            {countries}
          </section>
        </>
      )}
    </>
  );
};

export default Feed;
