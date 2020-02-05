export const save = (handle, data) => dispatch => {
  dispatch({
    type: handle,
    payload: data
  })
};
