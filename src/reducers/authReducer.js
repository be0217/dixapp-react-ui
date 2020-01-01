import { AUTHORIZE } from "../actions/actions";

export default (state = {logged: false, token: null, user: null}, action) => {
  switch (action.type) {
    case AUTHORIZE:
      return {
        logged: action.payload.logged,
        token: action.payload.token,
        user: action.payload.user
      };
    default:
      return state
  }
}
