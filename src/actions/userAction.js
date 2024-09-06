import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    const { data } = await api.fetchAllUsersApi();

    dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "FETCH_USERS_FAIL",
      payload: error.response.data.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
