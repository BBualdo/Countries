import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import CountryDetails from "./components/CountryDetails";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      return data;
    },
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main className={`min-h-screen ${isDarkMode ? "bg-veryDark" : "bg-light"}`}>
      <Routes>
        <Route
          element={<Layout isDarkMode={isDarkMode} toggleMode={toggleMode} />}
        >
          <Route
            index
            element={
              <Feed isDarkMode={isDarkMode} data={data} isLoading={isLoading} />
            }
          />
          <Route
            path="/:id"
            element={<CountryDetails isDarkMode={isDarkMode} data={data} />}
          />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
