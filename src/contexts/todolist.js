import { createContext, useReducer } from "react";

const initialState = {
    todos: [],
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
  