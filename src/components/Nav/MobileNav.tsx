import React from "react";
import { createUseStyles } from "react-jss";
import { SearchAndHamburgerMobile } from "./SearchAndHamburgerMobile";
import { CartAndUserMobile } from "./CartAndUserMobile";
import logo from "./microsoft-logo.png";

const useStyles = createUseStyles({
  mobileNav: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "108px",
    height: "23px",
  },
});

export const MobileNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.mobileNav}>
      <SearchAndHamburgerMobile />
      <img className={classes.logo} src={logo} alt="Microsoft logo" />
      <CartAndUserMobile />
    </div>
  );
};
