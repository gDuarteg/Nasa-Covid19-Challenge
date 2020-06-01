import * as actions from "../actions/user";

function user(state = initialState.user, action) {
  switch (action.type) {
    case actions.SAVE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case actions.SAVE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case actions.ACTIVE_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case actions.INVALID_TOKEN:
      return { ...state, token: "Unapproved Token" };
    default:
      return state;
  }
}
export default user;
