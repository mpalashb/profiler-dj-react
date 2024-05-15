import {
  CREATE_PROFILE,
  GET_PROFILE,
  GET_ME,
  DELETE_PROFILE,
  UPDATE_PROFILE,
} from "../types";
import { apiService } from "../../common/apiService";
import { convertERR } from "../../utils/errorConverter";

export const editProfileAction = async (
  dispatch,
  setAlert,
  form_data,
  navigate_,
  to
) => {
  try {
    const res = await apiService("/api/profile/", "PUT", form_data);
    if (res.ok) {
      const resJson = await res.json();
      dispatch({
        type: UPDATE_PROFILE,
        payload: resJson,
      });

      setAlert("Profile Updated!", "info");
      navigate_(to);
    } else {
      if (convertERR(res)) {
        setAlert(`${convertERR(res)}`, "danger");
      } else if (res) {
        setAlert(`${res}`, "danger");
      } else {
        setAlert(`${res.statusText}`, "danger");
      }
    }
  } catch (err) {
    setAlert(`${err}`, "danger");
  }
};

export const getUserAction = async (dispatch) => {
  try {
    const res = await apiService("/api/auth/me/");

    if (res.ok) {
      const resJson = await res.json();
      // console.log(resJson);
      dispatch({
        type: GET_ME,
        payload: resJson,
      });
    } else {
      // console.log(res);
      if (convertERR(res)) {
        console.log(res);
      } else if (res) {
        console.log(res);
        // setAlert(`${res}`, "danger");
      } else {
        console.log(res.statusText);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProfileAction = async (dispatch, setAlert) => {
  try {
    const res = await apiService("/api/profile/");

    if (res.ok) {
      const resJson = await res.json();
      // console.log(resJson);
      dispatch({
        type: GET_PROFILE,
        payload: resJson,
      });
    } else {
      // console.log(res);
      if (convertERR(res)) {
        setAlert(`${convertERR(res)}`, "danger");
      } else if (res) {
        if (!res === "Profile does not exist for this user.") {
          setAlert(`${err}`, "danger");
        }
        // setAlert(`${res}`, "danger");
      } else {
        setAlert(`${res.statusText}`, "danger");
      }
    }
  } catch (err) {
    if (!err === "Profile does not exist for this user.") {
      setAlert(`${err}`, "danger");
    }
  }
};

export const deleteProfileAction = async (
  dispatch,
  setAlert,
  navigate_,
  to
) => {
  try {
    const res = await apiService("/api/profile/", "DELETE");
    // console.log(res.status);
    if (res) {
      if (convertERR(res)) {
        setAlert(`${convertERR(res)}`, "danger");
      } else if (res) {
        setAlert(`${res}`, "danger");
      } else {
        setAlert(`${res.statusText}`, "danger");
      }
    } else {
      dispatch({
        type: DELETE_PROFILE,
        payload: { msg: "Profile Deleted" },
      });
      setAlert("Profile Deleted!", "danger");
      navigate_(to);
    }
  } catch (err) {
    setAlert(`${err}`, "danger");
  }
};

export const createProfileAction = async (
  dispatch,
  setAlert,
  form_data,
  navigate_,
  to
) => {
  try {
    const res = await apiService("/api/profile/create/", "POST", form_data);
    if (res.ok) {
      const resJson = await res.json();
      dispatch({
        type: CREATE_PROFILE,
        payload: resJson,
      });

      setAlert("Profile Created!", "info");
      navigate_(to);
      // return resJson;
    } else {
      // console.log(res);
      if (convertERR(res)) {
        setAlert(`${convertERR(res)}`, "danger");
      } else if (res) {
        setAlert(`${res}`, "danger");
      } else {
        setAlert(`${res.statusText}`, "danger");
      }
    }
  } catch (err) {
    setAlert(`${err}`, "danger");
  }
};
