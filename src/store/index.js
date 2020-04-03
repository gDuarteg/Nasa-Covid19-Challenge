import { createStore, combineReducers } from "redux";

import cart from "./reducers/cart";
import user from "./reducers/user";
import menu from "./reducers/menu";
import product from "./reducers/product";

initialState = {
  user: {
    email: "InitialEmail",
    password: "InitialPassword",
    token: "InitialToken"
  },
  menu: [],
  product: {},
  cart: []
};

// Root Reducer
const rootReducer = combineReducers({
  user,
  menu,
  product,
  cart
});

let store = createStore(rootReducer, initialState);

//console.log(store.getState());

export default store;
