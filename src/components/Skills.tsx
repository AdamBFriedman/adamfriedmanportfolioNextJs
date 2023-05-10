import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Skills = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode
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
          <div className="chart chart--dev">
            <span className={isDarkMode ? "chart__titleDark" : "chart__title"}>
              Development
            </span>
            <ul className="chart--horiz">
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "98%" }}
              >
                <span className="chart__label">HTML5/CSS</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "95%" }}
              >
                <span className="chart__label">JavaScript</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "90%" }}
              >
                <span className="chart__label">ReactJS</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "85%" }}
              >
                <span className="chart__label">VueJS</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "80%" }}
              >
                <span className="chart__label">SASS/LESS</span>
              </li>

              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "70%" }}
              >
                <span className="chart__label">NodeJS</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "55%" }}
              >
                <span className="chart__label">ExpressJS</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "35%" }}
              >
                <span className="chart__label">NoSQL</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "30%" }}
              >
                <span className="chart__label">MongoDB</span>
              </li>
            </ul>
          </div>

          <div className="chart chart--prod">
            <span className={isDarkMode ? "chart__titleDark" : "chart__title"}>
              Collaboration
            </span>
            <ul className="chart--horiz">
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "85%" }}
              >
                <span className="chart__label">Git/Github/Gitlab</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "80%" }}
              >
                <span className="chart__label">Jira</span>
              </li>
            </ul>
          </div>

          <div className="chart chart--design">
            <span className={isDarkMode ? "chart__titleDark" : "chart__title"}>
              Design
            </span>
            <ul className="chart--horiz">
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "90%" }}
              >
                <span className="chart__label">Material UI</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "55%" }}
              >
                <span className="chart__label">Figma</span>
              </li>

              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "50%" }}
              >
                <span className="chart__label">Zeplin</span>
              </li>
              <li
                className={isDarkMode ? "chart__barDark" : "chart__bar"}
                style={{ width: "42%" }}
              >
                <span className="chart__label">Sketch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
