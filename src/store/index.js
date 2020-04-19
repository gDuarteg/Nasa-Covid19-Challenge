import { createStore, combineReducers } from "redux";

import cart from "./reducers/cart";
import user from "./reducers/user";
import menu from "./reducers/menu";
import product from "./reducers/product";

initialState = {
  user: {
    name: "initialName",
    phone: "987654321",
    email: "InitialEmail@email.com",
    password: "InitialPassword",
    token: "InitialToken",
    cards: [
      {
        name: "nameInCard",
        number: "1234 1234 1234 1234",
        cpf: "1234565789",
        valid: "01/30",
        securityCode: "123"
      }
    ]
  },
  menu: [],
  product: {},
  cart: {
    cart: [],
    price: 0,
    len: 0
  }
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
