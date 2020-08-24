import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

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
  const classes = useStyles();
  return (
    <div className={classes.mobileNavLeftContent}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <FontAwesomeIcon className={classes.icon} icon={faBars} />
        </li>
        <li className={classes.listItem}>
          <FontAwesomeIcon className={classes.icon} icon={faSearch} />
        </li>
      </ul>
    </div>
  );
};
