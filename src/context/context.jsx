import { createContext, useReducer } from "react";

const initialValue = {
  toggle: true,
  toggleNavbar: true,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TOGGLE":
      return { ...state, toggle: payload };

    case "SET_TOGGLE_NAVBAR":
      return { ...state, toggleNavbar: payload };

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
