import { authTypes } from "../actionType/actionType";

export const loginStart = () => ({
  type: authTypes.USER_LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: authTypes.USER_LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = () => ({
  type: authTypes.USER_LOGIN_FAILURE,
});

export const logout = () => ({
  type: authTypes.USER_LOGOUT,
});

export const getProfileStart = () => ({
  type: authTypes.GET_USER_PROFILE_START,
});

export const getProfileSuccess = (payload) => ({
  type: authTypes.GET_USER_PROFILE_SUCCESS,
  payload: payload,
});

export const getProfileFailure = () => ({
  type: authTypes.GET_USER_PROFILE_FAILURE,
});

export const getProfileByTokenStart = () => ({
  type: authTypes.GET_PROFILE_BY_TOKEN_START,
});

export const getProfileByTokenSuccess = (payload) => ({
  type: authTypes.GET_PROFILE_BY_TOKEN_SUCCESS,
  payload: payload,
});

export const getProfileByTokenError = (err) => ({
  type: authTypes.GET_PROFILE_BY_TOKEN_ERROR,
  payload: err,
});
