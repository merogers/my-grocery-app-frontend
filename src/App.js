import React from 'react';
import './App.css';

import Header from './Components/Header';

import GroceryList from './Components/Grocery/GroceryList';
import GroceryAdd from './Components/Grocery/GroceryAdd';
import { GroceryProvider } from './Components/Grocery/GroceryContext';
import { ErrorProvider } from './Components/ErrorBoundary';

const App = () => {
  return (
    <ErrorProvider>
      <GroceryProvider>
        <div className="App">
          <Header title="My Grocery List" />
          <GroceryAdd />
          <GroceryList />
        </div>
      </GroceryProvider>
    </ErrorProvider>
  )
}

export default App;
