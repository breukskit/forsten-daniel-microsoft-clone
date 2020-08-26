import React, { useContext } from "react";
import { navLayoutContext } from "./NavLayoutContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { useStyles } from "./Nav";
import { v4 as uuidv4 } from "uuid";
import { createUseStyles } from "react-jss";

const menuItems = [
  { name: "Microsoft 365" },
  { name: "Office" },
  { name: "Windows" },
  { name: "Surface" },
  { name: "Xbox" },
  { name: "Specialerbjudanden" },
  { name: "Support" },
];

const useStyles = createUseStyles({
  mainNavList: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: "1rem",
  },
  mainNavbar: {
    paddingLeft: "1rem",
    width: (viewPort: string) =>
      viewPort === "medium" || viewPort === "large" || viewPort === "small"
        ? "50%"
        : "58%",
    height: "100%",
  },
  mainNavListItem: {
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
    },
  },
  mainNavListItemDropDown: {
    extend: "mainNavListItem",
    "& a": {
      paddingRight: "6px",
    },
  },
  expander: {
    paddingTop: "4px",
    fontSize: "10px",
    color: "#333333",
  },
});

export const MainNavbar = () => {
  const { viewPort } = useContext(navLayoutContext);
  const classes = useStyles(viewPort);

  const wholeList = (
    <ul className={classes.mainNavList}>
      {menuItems.map((item) => {
        return (
          <li className={classes.mainNavListItem} key={uuidv4()}>
            <a href="/">{item.name}</a>
          </li>
        );
      })}
    </ul>
  );

  const listMinusThree = (
    <ul className={classes.mainNavList}>
      {menuItems.map((item) => {
        if (
          item.name !== "Support" &&
          item.name !== "Specialerbjudanden" &&
          item.name !== "Xbox"
        ) {
          return (
            <li className={classes.mainNavListItem} key={uuidv4()}>
              <a href="/">{item.name}</a>
            </li>
          );
        }
      })}
      <li className={classes.mainNavListItemDropDown}>
        <a href="/">Mer</a>
        <span className={classes.expander}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </li>
    </ul>
  );

  const listMinusFour = (
    <ul className={classes.mainNavList}>
      {menuItems.map((item) => {
        if (
          item.name !== "Support" &&
          item.name !== "Specialerbjudanden" &&
          item.name !== "Xbox" &&
          item.name !== "Surface"
        ) {
          return (
            <li className={classes.mainNavListItem} key={uuidv4()}>
              <a href="/">{item.name}</a>
            </li>
          );
        }
      })}
      <li className={classes.mainNavListItemDropDown}>
        <a href="/">Mer</a>
        <span className={classes.expander}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </li>
    </ul>
  );
  return (
    <div className={classes.mainNavbar}>
      {viewPort === "xl"
        ? wholeList
        : viewPort === "large"
        ? listMinusThree
        : viewPort === "medium"
        ? listMinusThree
        : listMinusFour}
    </div>
  );
};

///////////////////////////////////////////////////////////////////

// const listMinusTwo = (
//   <ul className={classes.mainNavList}>
//     {menuItems.map((item) => {
//       if (item.name !== "Support" && item.name !== "Specialerbjudanden") {
//         return (
//           <li className={classes.mainNavListItem} key={uuidv4()}>
//             <a href="/">{item.name}</a>
//           </li>
//         );
//       }
//     })}
//     <li className={classes.mainNavListItemDropDown}>
//       <a href="/">Mer</a>
//       <span className={classes.expander}>
//         <FontAwesomeIcon icon={faChevronDown} />
//       </span>
//     </li>
//   </ul>
// );
