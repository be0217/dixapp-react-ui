import { environment } from "../index.js";
import { AUTHORIZE } from "./actions";

export const authorize = (login, password) => dispatch => {
  const { axios } = environment;
  axios.post("/users/authenticate", {
    email: login,
    password: password
  }).then(data => {
    console.log(data);
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
