import React, { useState } from "react";
import { createUseStyles } from "react-jss";

type changeEvent = React.ChangeEvent<HTMLInputElement>;
type submitEvent = React.FormEvent<HTMLFormElement>;

const useStyles = createUseStyles({
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
    border: "1px solid black",
    fontSize: "16px",
    padding: "5px",
    "&:focus": {
      outline: "1px solid blue",
    },
  },
});

export const MobileSearch = () => {
  const [input, setInput] = useState("");
  const handleChange = (e: changeEvent) => {
    setInput(e.currentTarget.value);
  };
  const handleSubmit = (e: submitEvent) => {
    e.preventDefault();
    alert(`You searched for ${input}`);
    setInput("");
  };
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        autoFocus
        className={classes.input}
        type="text"
        placeholder="Sök på Microsoft.com"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};
