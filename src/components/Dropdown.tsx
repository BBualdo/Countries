import { useState } from "react";

const Dropdown = ({
  selectedFilter,
  setSelectedFilter,
}: {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const selectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between p-[18px] w-[200px] bg-white shadow-[0_2px_9px_0_rgba(0,0,0,0.06)] cursor-pointer rounded-[5px]"
      >
        <p>{selectedFilter || "Filter by region"}</p>
        <svg
          className={isDropdownOpen ? "rotate-180" : ""}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
            fill="black"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <div className="absolute flex flex-col items-start bg-white shadow-[0_2px_9px_0_rgba(0,0,0,0.06)] w-full top-16 gap-2 px-6 py-4 rounded-[5px]">
          <button
            className={selectedFilter === "Africa" ? "font-bold" : ""}
            onClick={() => selectFilter("Africa")}
          >
            Africa
          </button>
          <button
            className={selectedFilter === "America" ? "font-bold" : ""}
            onClick={() => selectFilter("Americas")}
          >
            America
          </button>
          <button
            className={selectedFilter === "Asia" ? "font-bold" : ""}
            onClick={() => selectFilter("Asia")}
          >
            Asia
          </button>
          <button
            className={selectedFilter === "Europe" ? "font-bold" : ""}
            onClick={() => selectFilter("Europe")}
          >
            Europe
          </button>
          <button
            className={selectedFilter === "Oceania" ? "font-bold" : ""}
            onClick={() => selectFilter("Oceania")}
          >
            Oceania
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
