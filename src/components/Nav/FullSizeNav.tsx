import React from "react";
import { MainNavbar } from "./MainNavbar";
import { createUseStyles } from "react-jss";
import microsoftLogo from "./microsoft-logo.png";
import { SideNav } from "./SideNav";

const useStyles = createUseStyles({
  logo: {
    width: "108px",
    height: "23px",
  },
  fullSizeNav: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export const FullSizeNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.fullSizeNav}>
      <img className={classes.logo} src={microsoftLogo} alt="Microsoft Logo" />
      <MainNavbar />
      <SideNav />
    </div>
  );
};
