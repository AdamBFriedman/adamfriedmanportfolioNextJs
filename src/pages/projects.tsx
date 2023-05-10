import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Projects = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode
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
