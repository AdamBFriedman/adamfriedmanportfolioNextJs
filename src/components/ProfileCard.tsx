import Image from "next/image";

const ProfileCard = () => {
  return (
    <>
      <div className={`aboutImageContainer rollInLeft`}>
        <div className={"profileImageWrapper"}>
          <Image
            alt="Profile"
            className={"profileImage"}
            src={require("../images/profilePic.jpg")}
          />
          <ul className={"profileURL"}>
            <li className={"profileLI"}>
              <a
                className={`profileA linkedIn`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/adam-friedman5/"
              >
                LinkedIn
                <span className="fa fa-linkedin"></span>
              </a>
            </li>
            <li className={"profileLI"}>
              <a
                className={`profileA github`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AdamBFriedman"
              >
                <span className="fa fa-github"></span>
              </a>
            </li>
            <li className={"profileLI"}>
              <a
                className={`profileA gitlab`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://gitlab.com/Kustanza"
              >
                <span className="fa fa-gitlab"></span>
              </a>
            </li>
            <li className={"profileLI"}>
              <a
                className={`profileA gmail`}
                href="mailto:adam.friedman5@gmail.com?subject=Let's chat!&body=Hi Adam..."
              >
                <span className="fa fa-envelope-o"></span>
              </a>
            </li>
          </ul>
          <div className={"profileInfo"}>
            <h2 className={"profileInfoHeader"}>Adam Friedman</h2>
            <span className={"profileInfoSubHeader"}>
              Senior Web Developer{" "}
              <span className={"profileInfoLocation"}>San Francisco, CA</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
