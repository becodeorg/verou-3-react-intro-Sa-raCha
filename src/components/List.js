import { useContext } from "react";
import { TodolistContext } from "../contexts/todolist";

const List = () => {
    const [state, dispatch] = useContext(TodolistContext)
    console.log("state", state);
    return <div>Hello</div>
};

export default List;