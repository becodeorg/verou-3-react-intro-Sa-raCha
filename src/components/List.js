import { useContext } from "react";
import { TodolistContext } from "../contexts/todolist";

const List = () => {
    const [state, dispatch] = useContext(TodolistContext)

    const getVisibleTodos = () => {
        if (state.filter === "active") {
            return state.todos.filter((todo) => !todo.isCompleted);
        } else if (state.filter === "completed") {
            return state.todos.filter((todo) => todo.isCompleted);
        }
            return state.todos;
    };
    const visibleTodos = getVisibleTodos();

    console.log("visibleTodos", visibleTodos);
    return <div>Hello</div>
};

export default List;