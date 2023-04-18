import { useState } from "react";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
// import Card from "./Card";
// import FilterButtons from "./FilterButtons";

const Portfolio = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode
  );
  const [filter, setFilter] = useState("all");

  const projectData = () => {
    return [
      {
        imageType: ".png",
        filter: "vue",
        title: "Miami Dolphins",
        imageID: "28",
        href: "https://miamidolphins.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "javascript",
        title: "Fractal Trees",
        imageID: "27",
        href: "https://fractaltreefun.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "javascript",
        title: "Trails of Adam",
        imageID: "26",
        href: "https://trailsofadam.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "javascript",
        title: "Mario Memory Game",
        imageID: "25",
        href: "https://mariomemorygame.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "javascript",
        title: "Random Circles",
        imageID: "24",
        href: "https://randomcircles.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "react",
        title: "Walking Around",
        imageID: "23",
        href: "https://walkingaround.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "html",
        title: "The Friedman Times",
        imageID: "22",
        href: "https://thefriedmantimes.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "react",
        title: "Merge Sort Visualizer",
        imageID: "21",
        href: "https://mergesort.netlify.app/",
      },
      {
        imageType: ".png",
        filter: "vue",
        title: "PlayTable",
        imageID: "20",
        href: "https://www.playtable.com/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "COVID-19 Tracker",
        imageID: "19",
        href: "https://trackcovid19daily.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Expense Tracker",
        imageID: "18",
        href: "https://trackyourexpenses.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Hotel Friedman",
        imageID: "17",
        href: "https://hotelfriedman.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "javascript",
        title: "Chuck Norris",
        imageID: "16",
        href: "https://chucknorrisfacts.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "8 Bit Art",
        imageID: "15",
        href: "https://8bitart.netlify.com/",
      },
      {
        imageType: ".jpg",
        filter: "javascript",
        title: "Presidential Debate",
        imageID: "14",
        href: "https://presidentialdebate.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "html",
        title: "The Friedman Bunch",
        imageID: "13",
        href: "https://thefriedmanbunch.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "html",
        title: "Google Duplicate",
        imageID: "12",
        href: "https://googlehome.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Pokedex",
        imageID: "11",
        href: "https://pokedexgen1.netlify.app/#/",
      },
      {
        imageType: ".jpg",
        filter: "javascript",
        title: "CK's Coffee Shop",
        imageID: "10",
        href: "https://ckscoffeeshop.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "javascript",
        title: "For Goodness Cakes",
        imageID: "9",
        href: "https://forgoodnesscakes.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Recipe Search",
        imageID: "8",
        href: "https://recipesearch.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Warriors To Do List",
        imageID: "7",
        href: "https://todolistwarriors.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Random Meme Generator",
        imageID: "5",
        href: "https://randommemegenerator.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "javascript",
        title: "Knights Timer",
        imageID: "4",
        href: "https://ucfzella.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "javascript",
        title: "Snake Game",
        imageID: "3",
        href: "https://snakegamejs.netlify.app/",
      },
      {
        imageType: ".jpg",
        filter: "html",
        title: "Dog Breeders of America",
        imageID: "2",
        href: "http://www.dogbreedersamerica.com/",
      },
      {
        imageType: ".jpg",
        filter: "react",
        title: "Big Joey Magic Showy",
        imageID: "1",
        href: "https://bjms.netlify.app/",
      },
    ];
  };

  const handleFilter = (id: string) => {
    switch (id) {
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
      {/* <div className={"filterButtonWrapper"}>
        <FilterButtons setFilter={handleFilter} dark={isDarkMode} />
      </div> */}
      {projectData()
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
            <h1>{project.title}</h1>
            {/* <Card
              filter={["card", "filter", project.filter].join(" ")}
              title={project.title}
              src={require(`../img/projects/project${project.imageID}${project.imageType}`)}
              href={project.href}
            /> */}
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
