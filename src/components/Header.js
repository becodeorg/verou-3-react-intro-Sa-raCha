import { useState, useContext } from "react";
import { TodolistContext } from "../contexts/todolist";


const Header = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useContext(TodolistContext);

  const addText = (Event) => {
    setText(Event.target.value);
};
const keydownText = (Event) => {
    const enterKey = Event.keyCode === 13;
    const newText = text.trim();
    const textFieldNotEmpty = newText.length > 0;

    if (enterKey && textFieldNotEmpty ) {
      dispatch({ type: "addTask", payload: newText });
      setText("");
    }
  };


  return (
    <header className="header">
      <h1>Tasks</h1>
      <input
        className="new-todo"
        placeholder="Add a new task"
        value={text}
        onChange={addText}
        onKeyDown={keydownText}
        autoFocus
      />
    </header>
  );
};

export default Header;
