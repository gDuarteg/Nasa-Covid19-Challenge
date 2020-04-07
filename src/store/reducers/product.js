function product(state = initialState.product, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return action.payload;
    case "INC_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.map(ing =>
          ing === action.payload ? { ...ing, qnt: action.payload.qnt + 1 } : ing
        )
      };
    case "DEC_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.map(ing =>
          ing === action.payload ? { ...ing, qnt: action.payload.qnt - 1 } : ing
        )
      };
    default:
      return state;
  }
}
export default product;
