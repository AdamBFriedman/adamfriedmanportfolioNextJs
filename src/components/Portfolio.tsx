import { useState } from "react";
import { useSelector } from "react-redux";
import FilterButtons from "./FilterButtons";
import { isDarkModeStore } from "./Navbar";
import { Project } from "@/data/interfaces";
import { AwesomeCard } from "./AwesomeCard";
let projects = require("../data/projects.json");

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
      {projects &&
        projects
          .filter((project: Project) => {
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
          .map((project: Project, index: number) => (
            <div key={index} className={"projectCardWrapper"}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <AwesomeCard
                  hoverImage={require(`../images/projects/hoverImages/${project.hoverImage}`)}
                  projectImage={require(`../images/projects/project${project.imageID}${project.imageType}`)}
                  projectTitle={project.title}
                />
              </a>
            </div>
          ))}
    </div>
  );
};

export default Portfolio;
