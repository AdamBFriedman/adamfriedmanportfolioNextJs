import { isDarkModeStore } from "@/components/Navbar";
import Link from "next/link";
import { useSelector } from "react-redux";

const Home = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );

  const createHex = () => {
    let hexCode1 = "";
    let hexValues1 = "0123456789abcdef";

    for (let i = 0; i < 6; i++) {
      hexCode1 += hexValues1.charAt(
        Math.floor(Math.random() * hexValues1.length)
      );
    }
    return hexCode1;
  };

  const generateGradient = () => {
    const deg = Math.floor(Math.random() * 360);

    const gradient =
      "linear-gradient(" +
      deg +
      "deg, " +
      "#" +
      createHex() +
      ", " +
      "#" +
      createHex() +
      ")";

    document.getElementById("dynamicBackground")!.style.background = gradient;
  };

  return (
    <div
      className={
        isDarkMode
          ? "homeWrapper homeWrapperDark"
          : "homeWrapper homeWrapperLight"
      }
      id={"dynamicBackground"}
      onClick={generateGradient}
    >
      {/** We need to stop the background from changing color when we click on the animation */}
      <Link onClick={(e) => e.stopPropagation()} href="/about">
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
