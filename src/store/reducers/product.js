function product(state = initialState.product, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, product: action.payload };
    //   case "REMOVE":
    //     return { ...state, cart: action.payload };
    default:
      return state;
  }
}
export default product;
