function menu(state = initialState.menu, action) {
  switch (action.type) {
    case "ADD_MENU":
      return action.payload;
    default:
      return state;
  }
}
export default menu;
