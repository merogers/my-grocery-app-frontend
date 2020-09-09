import React, { useContext } from "react";

import GroceryItem from './GroceryItem';

import { GroceryContext } from "./GroceryContext";
import { ErrorBoundary } from "./../ErrorBoundary";

const GroceryList = () => {
  const [groceries] = useContext(GroceryContext);
  const [errorBoundary] = useContext(ErrorBoundary);

  //  GroceryListItems expression checks type of return values and API will return a JSON string if no items exist.

  const GroceryListItems = (type) => {
    const list = (typeof(groceries) !== "string") ? groceries.filter(item => { return item.item_active === type }) : [];
    return (list.length) ? (
      list.map(grocery => (
      <GroceryItem
        name={grocery.item_name}
        active={grocery.item_active}
        key={grocery.item_id}
        itemid={grocery.item_id}
      />
    ))) : <div>No Current items</div>
  }

  return (errorBoundary) ?
    <div className="container">
      <h2>Current Items</h2>
        { GroceryListItems(true) }
      <h2>Available Items</h2>
        { GroceryListItems(false) }
    </div> :
    <div className="error">
      Establishing Database Connection...
    </div>
};

export default GroceryList;
