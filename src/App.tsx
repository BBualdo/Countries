import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <main className="h-screen bg-light">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
