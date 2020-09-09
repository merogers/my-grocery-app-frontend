import React, { useContext } from "react";

import { ErrorBoundary } from "./../ErrorBoundary";
import { GroceryContext } from "./GroceryContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import config from '../../config';

const GroceryItem = ({ name, itemid, active }) => {
  const [, setGroceries] = useContext(GroceryContext);
  const [, setErrorBoundary] = useContext(ErrorBoundary);

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

  // API Methods

  const deleteItem = (e) => {
    fetch(`${config.url}${config.deleteItemEnd}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemid })
    })
      .then(res => res.json())
      .then(() => updateGroceries())
      .catch(() => setErrorBoundary(true))
  }

  const deactivateItem = (e) => {
    fetch(`${config.url}${config.modifyItemActEnd}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemid, item_active: false })
    })
      .then(res => res.json())
      .then(() => updateGroceries())
      .catch(() => setErrorBoundary(true))
  }

  const activateItem = (e) => {
    fetch(`${config.url}${config.modifyItemActEnd}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemid, item_active: true })
    })
      .then(res => res.json())
      .then(() => updateGroceries())
      .catch(() => setErrorBoundary(true))
  }

  // Conditional Returns - depending on which list the item belongs to

  return (
    <div className="grocery-item">
      <div className={active ? "active" : "inactive"}>{name}</div>
      <div>
        {active ?
          <button
            onClick={deactivateItem}
            className="activate-btn"
          > <FontAwesomeIcon icon={faCheck} />
          </button> :
          <button
            onClick={activateItem}
            className="activate-btn"
          > <FontAwesomeIcon icon={faPlus} />
          </button>
        }
        <button
          onClick={deleteItem}
          className="delete-btn"
        ><FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;
