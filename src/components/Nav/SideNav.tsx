import React, { useContext } from "react";
import { navLayoutContext } from "./NavLayoutContext";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  sideNav: {
    height: "100%",
    width: (viewPort: string) =>
      viewPort === "medium" || viewPort === "large" || viewPort === "small"
        ? "40%"
        : "32%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sideNavDropDown: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: {
      left: ".5rem",
      right: ".5rem",
    },
    fontSize: "13px",
    "&:hover": {
      cursor: "pointer",
      "& a": {
        borderBottom: "2px solid black",
      },
    },
    "& a": {
      color: "#262626",
      paddingRight: "6px",
    },
  },
  sideNavIcon: {
    fontSize: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  expander: {
    paddingTop: "4px",
    fontSize: "10px",
    color: "#333333",
  },
});
export const SideNav = () => {
  const { viewPort, navLayoutDispatch, navLayoutState } = useContext(
    navLayoutContext
  );
  const classes = useStyles(viewPort);
  return (
    <div className={classes.sideNav}>
      <p
        style={
          navLayoutState?.dropdownIsVisible
            ? { backgroundColor: "#F2F2F2", border: "1px solid #e6e6e6" }
            : {}
        }
        onClick={() => navLayoutDispatch!({ type: "TOGGLE_DROPDOWN" })}
        className={classes.sideNavDropDown}
      >
        <a href="#">Hela Microsoft</a>
        <span className={classes.expander}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </p>
      <FontAwesomeIcon
        onClick={() => navLayoutDispatch!({ type: "TOGGLE_FULLSIZE_SEARCH" })}
        className={classes.sideNavIcon}
        icon={faSearch}
      />

      <FontAwesomeIcon className={classes.sideNavIcon} icon={faShoppingCart} />

      <FontAwesomeIcon className={classes.sideNavIcon} icon={faUserCircle} />
    </div>
  );
};
