function order(state = initialState.order, action) {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        len: state.len + 1,
        price: state.price + parseInt(action.payload.price)
      };
    case "ADD_INIT_ORDER":
      return {
        ...state,
        cart: [action.payload],
        len: 1,
        price: parseInt(action.payload.price)
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload),
        len: state.len - 1,
        price: state.price - action.payload.price
      };
    case "CLEAN_CART":
      return { ...state, cart: [], len: 0, price: 0, machineId: "" };
    case "SAVE_MACHINE_ID":
      return {
        ...state,
        machineId: action.payload
      };
    default:
      return state;
  }
}
export default order;
