import { useContext, useEffect, useState } from "react";
import { TodolistContext } from "../contexts/todolist";
import Todo from "./Todo";

const List = () => {
    const [state, dispatch] = useContext(TodolistContext)
    const [editingId, setEditingId] = useState(null);
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
                <Todo key={todo.id} todo={todo} isEditing={editingId === todo.id} setEditingId={setEditingId}/> 
            ))}
          </ul>
        </section>
      );

};

export default List;