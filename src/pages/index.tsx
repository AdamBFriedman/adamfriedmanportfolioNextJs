import { isDarkModeStore } from "@/components/Navbar";
import Link from "next/link";
import { useSelector } from "react-redux";

const Home = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );
  return (
    <div
      className={
        isDarkMode
          ? "homeWrapper homeWrapperDark"
          : "homeWrapper homeWrapperLight"
      }
    >
      <Link href="/about">
        <div className="homeContainer">
          <div className="wall">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="left"></div>
            <div className="top"></div>
          </div>
          <div className="wall">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="left"></div>
            <div className="top"></div>
          </div>
          <div className="wall">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="left"></div>
            <div className="top"></div>
          </div>
          <div className="wall">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="left"></div>
            <div className="top"></div>
          </div>
          <div className="wall">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="left"></div>
            <div className="top"></div>
          </div>
          <div className="wall">
            <div className="surface"></div>
            <div className="surface"></div>
            <div className="left"></div>
            <div className="top"></div>
          </div>
          <div className="ball-container">
            <div className="ball"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
