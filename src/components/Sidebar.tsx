import React from "react";
import Link from "next/link";
import { makeStyles, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenuClose } from "@/store/mobileMenu/mobileMenuSlice";
import { setDarkMode, setLightMode } from "@/store/darkMode/darkModeSlice";

export const Sidebar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.isDarkMode.isDarkMode);
  const isMobileMenuOpen = useSelector(
    (state: any) => state.isMobileMenuOpen.isMobileMenuOpen
  );

  const setMode = () =>
    isDarkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());

  return (
    <Drawer
      variant="temporary"
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={isMobileMenuOpen}
      onClose={() => dispatch(setMobileMenuClose())}
      classes={{
        paper: "drawerPaper",
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className={"menuBar"}>
        <Divider />
        <Link href="/" className={"menuLink"}>
          <List className={"menuItem"}>Home</List>
        </Link>
        <Divider className={"divider"} />
        <Link href="/about" className={"menuLink"}>
          <List className={"menuItem"}>About</List>
        </Link>
        <Divider className={"divider"} />
        <Link href="/projects" className={"menuLink"}>
          <List className={"menuItem"}>Projects</List>
        </Link>
        <Divider className={"divider"} />
        <Link href="/contact" className={"menuLink"}>
          <List className={"menuItem"}>Contact</List>
        </Link>
        <Divider className={"divider"} />
        {isDarkMode ? (
          <div className={"sideBarLightbulbWrapper"}>
            <div
              onClick={setMode}
              className={["off", "ui-draggable", "sideBarLightbulb"].join(" ")}
            >
              <div className={"sideBarLightBulb2"} style={{ opacity: 0 }}></div>
            </div>
          </div>
        ) : (
          <div className={"sideBarLightbulbWrapper"}>
            <div
              onClick={setMode}
              className={["off", "ui-draggable", "sideBarLightbulb"].join(" ")}
            >
              <div className={"sideBarLightBulb2"} style={{ opacity: 1 }}></div>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default Sidebar;
