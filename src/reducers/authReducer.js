import {AUTHORIZE, LOGOUT} from "../actions/actions";

export default (state = {logged: false, token: null, user: null}, action) => {
    switch (action.type) {
        case AUTHORIZE:
            return {
                logged: action.payload.logged,
                token: action.payload.token,
                user: action.payload.user
            };
        case LOGOUT:
            return {
              logged: false,
              token: '',
              user: null
            };
        default:
            return state
    }
}
