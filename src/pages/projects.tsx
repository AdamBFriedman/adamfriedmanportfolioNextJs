import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

const Projects = () => {
  const isDarkMode = true;
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
