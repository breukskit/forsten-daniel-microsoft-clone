import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { SearchAndHamburgerMobile } from "./SearchAndHamburgerMobile";
import { CartAndUserMobile } from "./CartAndUserMobile";
import logo from "./microsoft-logo.png";
import { navLayoutContext } from "./NavLayoutContext";
import { MobileSearch } from "./MobileSearch";

const useStyles = createUseStyles({
  mobileNav: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: (mobileSizeSearchIsActive: boolean) =>
      mobileSizeSearchIsActive ? "" : "space-between",
  },
  logo: {
    width: "108px",
    height: "23px",
  },
});

export const MobileNav = () => {
  const { navLayoutState } = useContext(navLayoutContext);
  const { mobileSizeSearchIsActive } = navLayoutState!;
  const classes = useStyles(mobileSizeSearchIsActive);
  return (
    <div className={classes.mobileNav}>
      <SearchAndHamburgerMobile />
      {!navLayoutState!.mobileSizeSearchIsActive && (
        <>
          <img className={classes.logo} src={logo} alt="Microsoft logo" />
          <CartAndUserMobile />
        </>
      )}
      {navLayoutState!.mobileSizeSearchIsActive && <MobileSearch />}
    </div>
  );
};
