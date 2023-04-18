import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode
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
                <h6 className="profilePara">Info</h6>
                <div className="profileLine">
                  <h6 className="profilePara">Portfolio</h6>{" "}
                  <i className="fa fa-plane" aria-hidden="true"></i>
                  <h6 className="profilePara">LinkedIn</h6>
                </div>
                <div className="profileLine">
                  <h6 className="profilePara">GitHub</h6>{" "}
                  <i className="fa fa-plane" aria-hidden="true"></i>
                  <h6 className="profilePara">GitLab</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
