import { SET_ALERT, REMOVE_ALERT } from "../types";
// Function to set alert
export const setAlert = (dispatch, msg, type) => {
  const id = Math.random().toString(36).substr(2, 5); // Generate random id
  dispatch({ type: SET_ALERT, payload: { id, msg, type } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000); // Remove alert after 5 seconds
};
