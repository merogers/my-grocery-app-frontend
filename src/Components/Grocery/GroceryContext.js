import React, { useState, createContext, useContext, useEffect } from "react";

import { ErrorBoundary } from './../ErrorBoundary';

import config from '../../config';

export const GroceryContext = createContext();

export const GroceryProvider = (props) => {
  const [groceries, setGroceries] = useState([]);
  const [, setErrorBoundary] = useContext(ErrorBoundary);

  useEffect(() => {
    // Initial fetch all items from database or error
    const fetchGroceries = () => {
      fetch(`${config.url}${config.getActiveEnd}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(res => setGroceries(res))
        .then(() => setErrorBoundary(true))
        .catch(() => setErrorBoundary(false))
    }
    fetchGroceries();
  }, [setErrorBoundary]);

  return (
    <GroceryContext.Provider value={[groceries, setGroceries]}>
      {props.children}
    </GroceryContext.Provider>
  );
};
