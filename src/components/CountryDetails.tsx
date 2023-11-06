import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CountryDetails = ({
  isDarkMode,
  data,
}: {
  isDarkMode: boolean;
  data: any;
}) => {
  const { id } = useParams();

  const country = data.find(
    (country: { [key: string]: any }) => country.cca3 === id
  );

  const currenciesArray = Object.keys(country.currencies);
  const currencies = currenciesArray.map(
    (currencySymbol) => country.currencies[currencySymbol].name
  );

  const languagesArray = Object.keys(country.languages);
  const languages = languagesArray.map(
    (languageCode) => country.languages[languageCode]
  );

  const neighbours = country.borders.map((neighbour: string) =>
    data.find((country: { [key: string]: any }) => country.cca3 === neighbour)
  );

  const neighboursButtons = neighbours.map(
    (neighbour: { [key: string]: any }) => (
      <Link
        key={uuidv4()}
        className={`${
          isDarkMode ? "bg-dark" : "bg-light"
        } py-2 px-5 shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]`}
        to={`/${neighbour.cca3}`}
      >
        {neighbour.name.common}
      </Link>
    )
  );

  return (
    <section className="px-20 py-12">
      <Link
        to=".."
        className={`flex items-center gap-2 ${
          isDarkMode ? "bg-dark" : "bg-light"
        } py-2 px-5 shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] w-[110px]`}
      >
        <svg
          className={isDarkMode ? "fill-white" : "fill-black"}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
          />
        </svg>
        <p className={isDarkMode ? "text-white" : "text-black"}>Back</p>
      </Link>
      <div className="flex max-md:flex-col items-center mt-20 gap-10 md:gap-40">
        <div>
          <img
            className="w-full"
            src={country.flags.png}
            alt={country.name.common}
          />
        </div>
        <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
          <p className="h1">{country.name.common}</p>
          <div className="flex max-md:flex-col gap-4 justify-between mt-6">
            <div className="flex flex-col gap-2">
              <p>
                <b>Official Name:</b> {country.name.official}
              </p>
              <p>
                <b>Population:</b>{" "}
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Sub Regions:</b> {country.subregion}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <b>Top Level Domain:</b> {country.tld}
              </p>
              <p>
                <b>Currencies:</b> {currencies.join(", ")}
              </p>
              <p>
                <b>Languages:</b> {languages.join(", ")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-16">
            <p className="font-bold">Border Countries:</p>
            <div className="flex items-center gap-4 flex-wrap">
              {neighboursButtons}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
