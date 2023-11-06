import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({
  isDarkMode,
  toggleMode,
}: {
  isDarkMode: boolean;
  toggleMode: () => void;
}) => {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
