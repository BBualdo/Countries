import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Feed />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
