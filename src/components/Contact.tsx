import { useSelector } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../images/profilePic.jpg";
import { isDarkModeStore } from "./Navbar";

const Contact = () => {
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );

  return (
    <div className={isDarkMode ? "contactWrapperDark" : "contactWrapperLight"}>
      <div className="main">
        <div className="bio">
          <Image
            alt="Profile"
            className="profile-img bounce-in-top"
            src={ProfilePic}
          />
          <h3 className={isDarkMode ? "header headerDark" : "header"}>
            Adam Friedman
          </h3>
          <p className={isDarkMode ? "subHeader subHeaderDark" : "subHeader"}>
            Solution Architect with a passion for building
          </p>
          <Link
            href="https://www.linkedin.com/in/adam-friedman5/"
            className={isDarkMode ? "bioLink bioLinkDark" : "bioLink"}
          >
            <span className="bioLinkName">LinkedIn</span> <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/AdamBFriedman"
            className={isDarkMode ? "bioLink bioLinkDark" : "bioLink"}
          >
            <span className="bioLinkName">GitHub</span> <GitHubIcon />
          </Link>
          <Link
            href="mailto:adam.friedman5@gmail.com?subject=Let's chat!&body=Hi Adam..."
            className={isDarkMode ? "bioLink bioLinkDark" : "bioLink"}
          >
            <span className="bioLinkName">Email</span> <EmailIcon />
          </Link>
        </div>
        <div className="contact">
          <form
            id="form"
            action="https://formsubmit.co/adam.friedman5@gmail.com"
            method="POST"
          >
            <legend className="legendHeader">Get In Touch</legend>
            <fieldset>
              <label
                className="formLabel"
                htmlFor="name-input"
                aria-hidden="true"
              >
                <PersonIcon />
              </label>
              <input
                className={isDarkMode ? "formInput formInputDark" : "formInput"}
                type="text"
                name="name"
                placeholder="Name..."
                id="name-input"
              />
            </fieldset>
            <fieldset>
              <label
                className="formLabel"
                htmlFor="email-input"
                aria-hidden="true"
              >
                <EmailIcon />
              </label>
              <input
                className={isDarkMode ? "formInput formInputDark" : "formInput"}
                type="email"
                name="email"
                placeholder="Email..."
                id="email-input"
              />
            </fieldset>
            <fieldset>
              <label
                className="formLabel"
                htmlFor="message-input"
                aria-hidden="true"
              >
                <MessageIcon />
              </label>
              <textarea
                className={isDarkMode ? "formInput formInputDark" : "formInput"}
                name="message"
                placeholder="Message..."
                id="message-input"
              ></textarea>
            </fieldset>
            <fieldset>
              <div className="wrap">
                <button className="button">Send</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
