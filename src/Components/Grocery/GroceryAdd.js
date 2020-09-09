import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { GroceryContext } from "./GroceryContext";
import { ErrorBoundary } from "./../ErrorBoundary";

import config from '../../config';

const GroceryAdd = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const [, setErrorBoundary] = useContext(ErrorBoundary);
  const [groceries, setGroceries] = useContext(GroceryContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateGroceries = () => {
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

  // Errors will display to user with setError string

  const handleErrors = (res) => {
    if (res.status === 400) {
      setError("Failed to add item. No name or item already exists");
    } else {
      setError("");
    }
    return res;
  }

  const GroceryAddItem = (e) => {
    e.preventDefault();
    const body = {
      "item_active": "true",
      "item_name": name,
      "user_id": 1
    }
    fetch(`${config.url}${config.groceryAddEnd}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => handleErrors(res))
      .then(res => res.json())
      .then(() => setName(""))
      .then(() => setGroceries(groceries))
      .then(() => updateGroceries())
      .catch(() => setError("Failed to add item"))
  };

  return (
    <div className="add-form">
      <form onSubmit={GroceryAddItem} className="add-item">
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Enter item..."
          className="add-item-box"
        />
        <button className="activate-btn"><FontAwesomeIcon icon={faPlus} /></button>
      </form>
      { (error !== "") ? 
        <div className="error">{error}</div>: 
        <div></div>
      }
    </div>
  );
};

export default GroceryAdd;
