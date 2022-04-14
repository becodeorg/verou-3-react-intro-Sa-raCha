import { useContext } from "react";
import { TodolistContext } from "../contexts/todolist";

const List = () => {
    const [state, dispatch] = useContext(TodolistContext)
    const todosEmpty = state.todos.length === 0 ? "hidden" : "";

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
    return (
        <section className={`main ${todosEmpty}`}>
          <ul className="todo-list">
            {visibleTodos.map( todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </section>
      );

};

export default List;