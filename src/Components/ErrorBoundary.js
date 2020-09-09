import React, { useState, createContext } from "react";

export const ErrorBoundary = createContext();

// Error Boundary / Provider will error and provide a message to user if any of the API fetch requests fail. 

export const ErrorProvider = (props) => {
  const [errorBoundary, setErrorBoundary] = useState(false);

  return (
    <ErrorBoundary.Provider value={[errorBoundary, setErrorBoundary]}>
      {props.children}
    </ErrorBoundary.Provider>
  );
};
