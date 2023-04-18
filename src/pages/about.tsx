import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const About = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode
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
          <ProfileCard />
        </div>
        <div className="boxWrapper">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default About;
