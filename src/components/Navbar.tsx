import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLightMode } from "@/store/darkMode/darkModeSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { setMobileMenuOpen } from "@/store/mobileMenu/mobileMenuSlice";

export interface isDarkModeStore {
  isDarkMode: {
    isDarkMode: boolean;
  };
}

const Navbar = () => {
  const theme = useTheme();
  const isMobileOrSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  const isDarkMode = useSelector(
    (state: isDarkModeStore) => state.isDarkMode.isDarkMode
  );
  const isMobileMenuOpen = useSelector(
    (state: any) => state.isMobileMenuOpen.isMobileMenuOpen
  );
  const dispatch = useDispatch();
  const setMode = () =>
    isDarkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());
  return (
    <AppBar
      position="static"
      className={isDarkMode ? "navbar navbarDark" : "navbar"}
    >
      <Toolbar className={"toolBar"}>
        {isMobileOrSmaller ? (
          <IconButton
            className={"iconButton"}
            onClick={() => dispatch(setMobileMenuOpen())}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className="navbarMenuIcon" />
          </IconButton>
        ) : (
          <>
            <Link href="/" className={"hover-shadow navLink"}>
              {"Home".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </Link>

            <Link className={"hover-shadow navLink"} href="/about">
              {"About".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </Link>

            <Link className={"hover-shadow navLink"} href="/projects">
              {"Projects".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </Link>

            <Link className={"hover-shadow navLink"} href="/contact">
              {"Contact".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </Link>
            {isDarkMode ? (
              <div onClick={setMode} className={"off  ui-draggable lightbulb"}>
                <div className={"lightBulb2"} style={{ opacity: 0 }}></div>
              </div>
            ) : (
              <div onClick={setMode} className={"off  ui-draggable lightbulb"}>
                <div className={"lightBulb2"} style={{ opacity: 1 }}></div>
              </div>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
