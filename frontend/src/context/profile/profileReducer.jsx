import {
  CREATE_PROFILE,
  GET_PROFILE,
  GET_ME,
  UPDATE_PROFILE,
  DELETE_PROFILE,
} from "../types";

export default function profileReducer(state, action) {
  const { type, payload } = action;
  const prevState = state;
  const newState = payload;
  // console.log(prevState);
  switch (type) {
    case UPDATE_PROFILE:
      return {
        ...prevState,
        first_name: newState.first_name,
        last_name: newState.last_name,
        profile_pic: newState.profile_pic,
      };
    case GET_PROFILE:
    case CREATE_PROFILE:
      return {
        ...prevState,
        id: newState.id,
        get_username: newState.get_username,
        user: newState.user,
        first_name: newState.first_name,
        last_name: newState.last_name,
        profile_pic: newState.profile_pic,
      };
    case DELETE_PROFILE:
      return {
        ...prevState,
        id: 0,
        user: {},
        first_name: null,
        last_name: null,
        profile_pic: null,
      };
    case GET_ME:
      return {
        ...prevState,
        get_username: newState.username,
      };

    default:
      return state;
  }
}
