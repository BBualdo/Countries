import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import CountryDetails from "./components/CountryDetails";

import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main className={`h-full ${isDarkMode ? "bg-veryDark" : "bg-light"}`}>
      <Routes>
        <Route
          element={<Layout isDarkMode={isDarkMode} toggleMode={toggleMode} />}
        >
          <Route index element={<Feed isDarkMode={isDarkMode} />} />
          <Route
            path="/:id"
            element={<CountryDetails isDarkMode={isDarkMode} />}
          />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
