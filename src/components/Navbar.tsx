import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
// import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const isMobileOrSmaller = false;

  const handleClick = () => alert("click");
  return (
    <AppBar position="static" className={"appBar"}>
      <Toolbar className={"toolBar"}>
        {isMobileOrSmaller ? (
          <IconButton
            className={"iconButton"}
            onClick={handleClick}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            Menu Icon
            {/* <MenuIcon /> */}
          </IconButton>
        ) : (
          <>
            <Link
              href="/"
              className={"hover-shadow navLink"}
              //   {
              //     dark
              //       ? ["hover-shadowDark", classes.link].join(" ")
              //       : ["hover-shadow", classes.link].join(" ")
              //   }
            >
              <span>H</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </Link>

            <Link
              className={"hover-shadow navLink"}
              //   {
              //     dark
              //       ? ["hover-shadowDark", classes.link].join(" ")
              //       : ["hover-shadow", classes.link].join(" ")
              //   }
              href="/about"
            >
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </Link>

            <Link
              className={"hover-shadow navLink"}
              //   {
              //     dark
              //       ? ["hover-shadowDark", classes.link].join(" ")
              //       : ["hover-shadow", classes.link].join(" ")
              //   }
              href="/projects"
            >
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </Link>

            <Link
              className={"hover-shadow navLink"}
              //   {
              //     dark
              //       ? ["hover-shadowDark", classes.link].join(" ")
              //       : ["hover-shadow", classes.link].join(" ")
              //   }
              href="/contact"
            >
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
            </Link>
            {/* {dark ? (
      <div
        onClick={onClick}
        className={["off", "ui-draggable", classes.lightbulb].join(" ")}
      >
        <div className={classes.lightBulb2} style={{ opacity: 0 }}></div>
      </div>
    ) : (
      <div
        onClick={onClick}
        className={["off", "ui-draggable", classes.lightbulb].join(" ")}
      >
        <div className={classes.lightBulb2} style={{ opacity: 1 }}></div>
      </div>
    )} */}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
