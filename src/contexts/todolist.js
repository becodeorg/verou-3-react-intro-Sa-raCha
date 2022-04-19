import { createContext, useReducer } from "react";

const initialState = {
    todos: [],
    filter: "all",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "addTask": {

            const newTask = {
                id: Math.random().toString(16),
                text: action.payload,
                isCompleted: false
            };

            return {
                ...state,
                todos: [...state.todos, newTask]
            };
        };

        case "toggleTodo": {

            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                return { ...todo, isCompleted: !todo.isCompleted };
                }

                return todo;
            });

            return {
              ...state,
              todos: updatedTodos,
            };
        }
          case "changeTodo": {
            const updatedTodos = state.todos.map((todo) => {
              if (todo.id === action.payload.id) {
                return { ...todo, text: action.payload.text };
              }
              return todo;
            });
            return {
              ...state,
              todos: updatedTodos,
            };
          }
          case "removeTodo": {
            const updatedTodos = state.todos.filter(
              (todo) => todo.id !== action.payload
            );
            return {
              ...state,
              todos: updatedTodos,
            };
          }
          
        default: return state;
    };   
};

export const TodolistContext = createContext();

export const TodolistProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
  
    return (
      <TodolistContext.Provider value={value}>{children}</TodolistContext.Provider>
    );
  };
  