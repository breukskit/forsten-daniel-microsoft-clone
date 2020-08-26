import React, { useContext } from "react";
import { navLayoutContext } from "./NavLayoutContext";
import { createUseStyles } from "react-jss";
import { useInput } from "./useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  fullSizeSearch: {
    width: "100%",
    height: "100%",
    padding: {
      left: "1rem",
      right: "1rem",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "85%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
  },
  label: {
    width: "100%",
    position: "relative",
  },
  input: {
    width: "100%",
    fontSize: "14px",
    padding: "8px",
    border: "2px solid rgba(0,0,0,0.75)",
    "&:focus": {
      outline: "1px solid blue",
    },
  },
  button: {
    fontSize: "14px",
    backgroundColor: "transparent",
    outline: "none",
    border: "1px solid rgba(0,0,0,0.5)",
    padding: {
      top: "6px",
      right: "12px",
      bottom: "6px",
      left: "12px",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ddd",
    },
  },
  icon: {
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    position: "absolute",
    fontSize: "18px",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const FullSizeSearch = () => {
  const { navLayoutDispatch } = useContext(navLayoutContext);
  const [input, handleChange, handleSubmit] = useInput();
  const classes = useStyles();
  return (
    <div className={classes.fullSizeSearch}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label className={classes.label}>
          <input
            className={classes.input}
            autoFocus
            type="text"
            placeholder="Sök på Microsoft.com"
            value={input}
            onChange={handleChange}
          />
          <button type="submit" className={classes.icon}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </label>
      </form>
      <button
        className={classes.button}
        onClick={() => navLayoutDispatch!({ type: "TOGGLE_FULLSIZE_SEARCH" })}
      >
        Avbryt
      </button>
    </div>
  );
};
