import React, { useContext } from "react";
import { navLayoutContext } from "./NavLayoutContext";
import { FullSizeNav } from "./FullSizeNav";
import { MobileNav } from "./MobileNav";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  nav: {
    width: "100%",
    height: "54px",
    padding: {
      top: "0",
      bottom: "0",
    },
    paddingLeft: (viewPort: string) =>
      viewPort === "mobile" ? "1rem" : "2.5rem",
    paddingRight: (viewPort: string) =>
      viewPort === "mobile" ? "1rem" : "2.5rem",
  },
});

export const Nav = () => {
  const { viewPort } = useContext(navLayoutContext);
  const classes = useStyles(viewPort);
  return (
    <nav className={classes.nav}>
      {viewPort !== "mobile" && <FullSizeNav />}
      {viewPort === "mobile" && <MobileNav />}
    </nav>
  );
};
