import React, { createContext, useReducer, useContext } from "react";
import alertReducer from "./alertReducer";
import { setAlert as setAlertAction } from "./alertActions";
// Define context
const AlertContext = createContext();

// Define initial state
const initialState = [];

// Define provider component
export const AlertProvider = ({ children }) => {
  const [alerts, dispatch] = useReducer(alertReducer, initialState);
  const setAlert = (msg, type) => {
    setAlertAction(dispatch, msg, type);
  };

  return (
    <AlertContext.Provider value={{ alerts, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use alert context
export const useAlert = () => useContext(AlertContext);
