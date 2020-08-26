import { useState } from "react";

type changeEvent = React.ChangeEvent<HTMLInputElement>;
type submitEvent = React.FormEvent<HTMLFormElement>;

export const useInput = () => {
  const [input, setInput] = useState("");
  const handleChange = (e: changeEvent) => {
    setInput(e.currentTarget.value);
  };
  const handleSubmit = (e: submitEvent) => {
    e.preventDefault();
    if (input !== "") {
      alert(`You searched for ${input}`);
      setInput("");
    }
  };
  return [input, handleChange, handleSubmit] as const;
};
