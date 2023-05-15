import Link from "next/link";

const Home = () => {
  return (
    <div className="homeWrapper">
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
