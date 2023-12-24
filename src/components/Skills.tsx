import { Skill } from "@/data/interfaces";
import { useSelector } from "react-redux";
import { isDarkModeStore } from "./Navbar";
let skills = require("../data/skills.json");

const Skills = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );

  return (
    <div>
      <div className="skills">
        <ul className="lines">
          <li
            className={
              isDarkMode
                ? ["lineDark", "l--0"].join(" ")
                : ["lineLight", "l--0"].join(" ")
            }
          >
            <span
              className={
                isDarkMode
                  ? ["tracking-in-expand", "line__labelDark", "title"].join(" ")
                  : ["tracking-in-expand", "line__label", "title"].join(" ")
              }
            >
              Rank:
            </span>
          </li>
          <li
            className={
              isDarkMode
                ? ["lineDark", "tracking-in-expand", "l--25"].join(" ")
                : ["lineLight", "tracking-in-expand", "l--25"].join(" ")
            }
          >
            <span className={isDarkMode ? "line__labelDark" : "line__label"}>
              Youngling
            </span>
          </li>
          <li
            className={
              isDarkMode
                ? ["lineDark", "tracking-in-expand", "l--50"].join(" ")
                : ["lineLight", "tracking-in-expand", "l--50"].join(" ")
            }
          >
            <span className={isDarkMode ? "line__labelDark" : "line__label"}>
              Padawan
            </span>
          </li>
          <li
            className={
              isDarkMode
                ? ["lineDark", "tracking-in-expand", "l--75"].join(" ")
                : ["lineLight", "tracking-in-expand", "l--75"].join(" ")
            }
          >
            <span className={isDarkMode ? "line__labelDark" : "line__label"}>
              Knight
            </span>
          </li>
          <li
            className={
              isDarkMode
                ? ["lineDark", "tracking-in-expand", "l--100"].join(" ")
                : ["lineLight", "tracking-in-expand", "l--100"].join(" ")
            }
          >
            <span className={isDarkMode ? "line__labelDark" : "line__label"}>
              Jedi Master
            </span>
          </li>
        </ul>

        <div className="charts">
          {skills.map((skill: any, index: number) => {
            return (
              <div
                key={index}
                className={
                  index === 0
                    ? "chart chart--dev"
                    : index === 1
                    ? "chart chart--prod"
                    : "chart chart--design"
                }
              >
                <span
                  className={isDarkMode ? "chart__titleDark" : "chart__title"}
                >
                  {Object.keys(skills[index])}
                </span>
                <ul className="chart--horiz">
                  {skills[index][Object.keys(skills[index])[0]].map(
                    (skill: any) => {
                      return (
                        <li
                          key={skill.id}
                          className={
                            isDarkMode ? "chart__barDark" : "chart__bar"
                          }
                          style={{ width: skill.percentage }}
                        >
                          <span className="chart__label">{skill.name}</span>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
