import { createContext, useContext, useReducer } from "react";
import profileReducer from "./profileReducer";
import {
  createProfileAction,
  getProfileAction,
  getUserAction,
  deleteProfileAction,
  editProfileAction,
} from "./profileAction";
import { useAlert } from "../alerts/alertContext";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { setAlert } = useAlert();
  const initialState = {
    id: 0,
    get_username: null,
    user: {},
    first_name: null,
    last_name: null,
    profile_pic: null,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const getUser = () => {
    getUserAction(dispatch);
  };

  const updateProfile = (form_data, navigate_, to) => {
    editProfileAction(dispatch, setAlert, form_data, navigate_, to);
  };

  const delProfile = (navigate_, to) => {
    deleteProfileAction(dispatch, setAlert, navigate_, to);
  };

  const getProfile = () => {
    getProfileAction(dispatch, setAlert);
  };
  const createProfile = async (form_data, navigate_, to) => {
    createProfileAction(dispatch, setAlert, form_data, navigate_, to);
  };

  return (
    <ProfileContext.Provider
      value={{
        profileState: state,
        getUser,
        getProfile,
        createProfile,
        delProfile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => useContext(ProfileContext);

export { ProfileProvider, useProfile };
