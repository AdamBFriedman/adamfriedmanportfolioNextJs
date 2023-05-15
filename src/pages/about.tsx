import Navbar, { isDarkModeStore } from "@/components/Navbar";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import { useSelector } from "react-redux";

const About = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );
  return (
    <>
      <Navbar />
      <div
        className={
          isDarkMode
            ? "aboutWrapper aboutWrapperDark"
            : "aboutWrapper aboutWrapperLight"
        }
      >
        <div className="boxWrapper">
          <Profile />
        </div>
        <div className="boxWrapper">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default About;
