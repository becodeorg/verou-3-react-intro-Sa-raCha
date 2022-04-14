import { useContext } from "react";
import { TodolistContext } from "../contexts/todolist";

const Status = () => {
    const [state, dispatch] = useContext(TodolistContext);
    const todoCount = state.todos.filter((todo) => !todo.isCompleted).length;
    
    return (
        <footer>
            <span className="todo-count">
                {todoCount}
            </span>
        </footer>
    );
};

export default Status;