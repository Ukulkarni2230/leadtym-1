// Action Types
export const SET_USER_TYPE_ID = "SET_USER_TYPE_ID";
export const SET_USER_DETAILS = "SET_USER_DETAILS";

export const setUserTypeId = (userTypeId) => ({
  type: SET_USER_TYPE_ID,
  payload: userTypeId,
});

// Action Creator for setting user details
export const setUserDetails = (details) => ({
  type: SET_USER_DETAILS,
  payload: details,
});

// Action type
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";

// Action creator
export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
});
