import { environment } from "../index.js";
import {AUTHORIZE, LOGOUT} from "./actions";

export const authorize = (login, password) => dispatch => {
  const { axios } = environment;
  axios.post("/users/authenticate", {
    email: login,
    password: password
  }).then(data => {
    dispatch({
      type: AUTHORIZE,
      payload: {
        user: data.data.user,
        logged: true,
        token: data.data.token
      }
    })
  })
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
