import { createContext, useReducer } from "react";

const initialState = {
    todos: [],
  };

const reducer = (state, action) =>{
    switch (action.type) {
        case "addTask": 
        console.log("action", state, action);
        return state;
        default: return state;
    };
    
}

export const TodolistContext = createContext();

export const TodolistProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
  
    return (
      <TodolistContext.Provider value={value}>{children}</TodolistContext.Provider>
    );
  };
  