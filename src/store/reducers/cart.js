function cart(state = initialState.cart, action) {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "ADD_INIT_CART":
      return { ...state, cart: [action.payload] };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload)
      };
    case "CLEAN":
      return { cart: [] };
    default:
      return state;
  }
}
export default cart;
