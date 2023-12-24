import { useState } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import FilterButtons from "./FilterButtons";
import { isDarkModeStore } from "./Navbar";
import { projects } from "../data/projects";

const Portfolio = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );
  const [filter, setFilter] = useState("all");

  const handleFilter = (filterOption: string) => {
    if (filter === filterOption) {
      setFilter("all");
      return;
    }
    switch (filterOption) {
      case "all":
        setFilter("all");
        break;
      case "javascript":
        setFilter("javascript");
        break;
      case "react":
        setFilter("react");
        break;
      case "vue":
        setFilter("vue");
        break;
      case "html":
        setFilter("html");
        break;
      default:
        setFilter("all");
    }
  };

  return (
    <div className={"portfolioCardWrapper"}>
      <div className={"filterButtonWrapper"}>
        <FilterButtons setFilter={handleFilter} isDarkMode={isDarkMode} />
      </div>
      {projects()
        .filter((project) => {
          return filter === "all"
            ? project
            : filter === "javascript"
            ? project.filter === "javascript"
            : filter === "react"
            ? project.filter === "react"
            : filter === "vue"
            ? project.filter === "vue"
            : filter === "html"
            ? project.filter === "html"
            : "";
        })
        .map((project, index) => (
          <div key={index} className={"projectCardWrapper"}>
            <ProjectCard
              filter={["card", "filter", project.filter].join(" ")}
              title={project.title}
              src={require(`../images/projects/project${project.imageID}${project.imageType}`)}
              href={project.href}
            />
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
