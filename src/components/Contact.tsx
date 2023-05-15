import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../images/profilePic.jpg";

const Contact = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode
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
          <h3 className="header">Adam Friedman</h3>
          <p>Senior Web Developer with a passion for building.</p>
          <a
            className={
              isDarkMode ? "bio-link" : `${"bio-link"} ${"bio-link-light"}`
            }
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/adam-friedman5/"
          >
            LinkedIn
            <i className="ml-3 fa fa-linkedin"></i>
          </a>
          <a
            className={
              isDarkMode ? "bio-link" : `${"bio-link"} ${"bio-link-light"}`
            }
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AdamBFriedman"
          >
            Github
            <i className="ml-3 fa fa-github"></i>
          </a>
          <a
            className={
              isDarkMode ? "bio-link" : `${"bio-link"} ${"bio-link-light"}`
            }
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/Kustanza"
          >
            Gitlab
            <i className="ml-3 fa fa-gitlab"></i>
          </a>
          <a
            className={
              isDarkMode ? "bio-link" : `${"bio-link"} ${"bio-link-light"}`
            }
            href="mailto:adam.friedman5@gmail.com?subject=Let's chat!&body=Hi Adam..."
          >
            Email
            <i className="ml-3 fa fa-envelope-o"></i>
          </a>
        </div>
        <div className="contact">
          <form
            id="form"
            action="https://formsubmit.co/adam.friedman5@gmail.com"
            method="POST"
          >
            <legend className="header">Get In Touch</legend>
            <fieldset>
              <label
                className="fa fa-user"
                htmlFor="name-input"
                aria-hidden="true"
              ></label>
              <input
                type="text"
                name="name"
                placeholder="Name..."
                id="name-input"
              />
            </fieldset>
            <fieldset>
              <label
                className="fa fa-envelope"
                htmlFor="email-input"
                aria-hidden="true"
              ></label>
              <input
                type="email"
                name="email"
                placeholder="Email..."
                id="email-input"
              />
            </fieldset>
            <fieldset>
              <label
                className="fa fa-comment"
                htmlFor="message-input"
                aria-hidden="true"
              ></label>
              <textarea
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
