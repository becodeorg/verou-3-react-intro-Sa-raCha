import { useState } from "react";


const Header = () => {
    const [text, setText] = useState("");
    const addText = (Event) => {
        console.log("addText", Event.target.value);
    }
 
  

  return (
    <header className="header">
      <h1>Tasks</h1>
      <input
        className="new-todo"
        placeholder="Add a new task"
        value={text}
        onChange={addText}
        autoFocus
      />
    </header>
  );
};

export default Header;
