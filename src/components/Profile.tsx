import { useSelector } from "react-redux";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { isDarkModeStore } from "./Navbar";

const Profile = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <div className="profilePanel">
          <div
            className={
              isDarkMode ? "profileRing profileRingDark" : "profileRing"
            }
          >
            <div
              className={
                isDarkMode ? "profileCard profileCardDark" : "profileCard"
              }
            ></div>
            <div
              className={
                isDarkMode ? "profileBorder profileBorderDark" : "profileBorder"
              }
            >
              <div className="profileSlide">
                <div className={"profilePara"}>
                  <h2 className={"infoHeader"}>Adam Friedman</h2>
                  <span className={"infoSubHeader"}>
                    Solution Architect, Manager{" "}
                    <span className={"infoLocation"}>Austin, TX</span>
                  </span>
                </div>
                <div className={"profileLinksWrapper"}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/adam-friedman5/"
                    className="profileLink linkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/AdamBFriedman"
                    className="profileLink github"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:adam.friedman5@gmail.com?subject=Let's chat!&body=Hi Adam..."
                    className="profileLink gmail"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
