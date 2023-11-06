import Dropdown from "./Dropdown";

const Filters = ({
  selectedFilter,
  setSelectedFilter,
}: {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}) => {
  return (
    <div className="flex items-center justify-between px-20 pt-12">
      <div className="relative flex items-center">
        <svg
          className="absolute left-8"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#848484"
          />
        </svg>
        <input
          className="py-[18px] pl-[74px] pr-[18px] bg-white shadow-[0_2px_9px_0_rgba(0,0,0,0.06)] w-[480px] rounded-[5px]"
          id="search-country"
          name="search-country"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div>
        <Dropdown
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
    </div>
  );
};

export default Filters;
