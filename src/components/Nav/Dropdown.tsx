import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const useStyles = createUseStyles({
  dropdown: {
    position: "absolute",
    backgroundColor: "#F2F2F2",
    border: "1px solid #E6E6E6",
    width: "90%",
    paddingTop: "1rem",
  },
  topContent: {
    display: "flex",
    flexFlow: "row wrap",
    marginBottom: "1rem",
  },
  item: {
    padding: {
      top: ".5rem",
      right: "2rem",
      bottom: ".5rem",
      left: "2rem",
    },
    fontSize: "14px",
    color: "#262626",
  },
  itemHeader: {
    marginBottom: "14px",
    fontSize: "14px",
    fontWeight: "500",
  },
  listItem: {
    padding: {
      top: "10px",
      bottom: "10px",
    },
    "&:hover": {
      cursor: "pointer",
      "& a": {
        textDecoration: "underline",
      },
    },
  },
  link: {
    color: "#262626",
  },
  bottomContent: {
    backgroundColor: "#E6E6E6",
  },
  bottomParagraph: {
    padding: {
      top: ".5rem",
      bottom: ".5rem",
    },
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLink: {
    paddingRight: ".5rem",
    color: "#262626",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  bottomIcon: {
    fontSize: "14px",
  },
});

const listOne = [
  "Windows-appar",
  "OneDrive",
  "Outlook",
  "Skype",
  "OneNote",
  "Microsoft Teams",
];

const listTwo = ["Köp  Xbox", "Tillbehör"];

const listThree = [
  "Xbox Game Pass Ultimate",
  "Xbox Live Gold",
  "Xbox och spel",
  "PC-spel",
  "Spel för Windows",
  "Filmer och tv",
];

const listFour = [
  "Microsoft Azure",
  "Microsoft Dynamics 365",
  "Microsoft 365",
  "Microsoft Industry",
  "Dataplattform",
  "Microsoft Advertising",
  "Power Platform",
  "Köp för företag",
];

const listFive = [
  ".NET",
  "Visual Studio",
  "Windows Server",
  "Windows Dev Center",
  "Dokument",
  "Power Apps",
];

const listSix = [
  "Microsoft Rewards",
  "Kostnadsfria nedladdningar och säkerhet",
  "Utbildning",
  "Presentkort",
  "Licensiering",
];

export const Dropdown = () => {
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <div className={classes.topContent}>
        <div className={classes.item}>
          <h5 className={classes.itemHeader}>Programvara</h5>
          <ul>
            {listOne.map((item) => {
              return (
                <li key={uuidv4()} className={classes.listItem}>
                  <a className={classes.link} href="/">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.item}>
          <h5 className={classes.itemHeader}>Datorer och enheter</h5>
          <ul>
            {listTwo.map((item) => {
              return (
                <li key={uuidv4()} className={classes.listItem}>
                  <a className={classes.link} href="/">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.item}>
          <h5 className={classes.itemHeader}>Underhållning</h5>
          <ul>
            {listThree.map((item) => {
              return (
                <li key={uuidv4()} className={classes.listItem}>
                  <a className={classes.link} href="/">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.item}>
          <h5 className={classes.itemHeader}>Företag</h5>
          <ul>
            {listFour.map((item) => {
              return (
                <li key={uuidv4()} className={classes.listItem}>
                  <a className={classes.link} href="/">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.item}>
          <h5 className={classes.itemHeader}>Developer &amp; IT</h5>
          <ul>
            {listFive.map((item) => {
              return (
                <li key={uuidv4()} className={classes.listItem}>
                  <a className={classes.link} href="/">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.item}>
          <h5 className={classes.itemHeader}>Andra</h5>
          <ul>
            {listSix.map((item) => {
              return (
                <li key={uuidv4()} className={classes.listItem}>
                  <a className={classes.link} href="/">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.bottomContent}>
        <p className={classes.bottomParagraph}>
          <a className={classes.bottomLink} href="/">
            VISA WEBBPLATSKARTA
          </a>
          <FontAwesomeIcon
            className={classes.bottomIcon}
            icon={faChevronRight}
          />
        </p>
      </div>
    </div>
  );
};
