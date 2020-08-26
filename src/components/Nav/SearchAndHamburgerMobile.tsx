import React, { useContext } from "react";
import { navLayoutContext } from "./NavLayoutContext";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  mobileNavLeftContent: {
    height: "100%",
  },
  icon: {
    fontSize: "18px",
  },
  list: {
    display: "flex",
    height: "100%",
  },
  listItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: {
      top: ".5rem",
      right: ".75rem",
      bottom: ".5rem",
      left: ".75rem",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const SearchAndHamburgerMobile = () => {
  const { navLayoutState, navLayoutDispatch } = useContext(navLayoutContext);
  const classes = useStyles();
  const barsFunctionality = () => {
    if (navLayoutState!.mobileSizeSearchIsActive) {
      navLayoutDispatch!({ type: "TOGGLE_MOBILE_SEARCH" });
    }
  };
  const handleSearchIconFunctionality = () => {
    if (!navLayoutState?.mobileSizeSearchIsActive) {
      navLayoutDispatch!({ type: "TOGGLE_MOBILE_SEARCH" });
    }
  };
  return (
    <div className={classes.mobileNavLeftContent}>
      <ul className={classes.list}>
        <li style={{ paddingLeft: "0" }} className={classes.listItem}>
          <FontAwesomeIcon
            className={classes.icon}
            onClick={barsFunctionality}
            icon={
              !navLayoutState!.mobileSizeSearchIsActive ? faBars : faArrowLeft
            }
          />
        </li>
        <li
          onClick={handleSearchIconFunctionality}
          className={classes.listItem}
        >
          <FontAwesomeIcon className={classes.icon} icon={faSearch} />
        </li>
      </ul>
    </div>
  );
};
