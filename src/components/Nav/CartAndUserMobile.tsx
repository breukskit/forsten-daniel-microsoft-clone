import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  mobileNavRightContent: {
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
export const CartAndUserMobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.mobileNavRightContent}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <FontAwesomeIcon className={classes.icon} icon={faShoppingCart} />
        </li>
        <li className={classes.listItem}>
          <FontAwesomeIcon className={classes.icon} icon={faUserCircle} />
        </li>
      </ul>
    </div>
  );
};
