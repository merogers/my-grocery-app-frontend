// Config File for API entry points

// getActive - Fetches all items
// groceryAdd - Adds to database
// deleteItem - Deletes from database
// modifyItemAct - Modifies whether the item is on the current or available item list

const config = {
  // Development URL
  // url: "http://localhost:5000",
  // Production URL
  url: "https://my-grocery-app-backend.herokuapp.com",
  // Endpoints
  getActiveEnd: "/GetActive",
  groceryAddEnd: "/AddItem",
  deleteItemEnd: "/DeleteItem",
  modifyItemActEnd: "/ModifyItemActivity"
}

export default config;