import Navbar, { isDarkModeStore } from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import { useSelector } from "react-redux";

const Projects = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );
  return (
    <>
      <Navbar />
      <div
        className={isDarkMode ? "projectsWrapperDark" : "projectsWrapperLight"}
      >
        <Portfolio />
      </div>
    </>
  );
};

export default Projects;
