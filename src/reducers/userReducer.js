const initialState = {
  loading: false,
  usersData: [],
  error: null,
};

export const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        loading: true,
        usersData: [],
      };

    case "FETCH_USERS_SUCCESS":
      return {
        loading: false,
        usersData: action.payload,
      };

    case "FETCH_USERS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
