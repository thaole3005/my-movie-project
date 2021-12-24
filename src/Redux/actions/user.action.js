import { userType } from "../actionType/actionType";

export const createUserStart = () => ({
  type: userType.CREAT_USER_START,
});

export const createUserSuccess = (payload) => ({
  type: userType.CREAT_USER_SUCCESS,
  payload: payload,
});

export const createUserFailure = () => ({
  type: userType.CREAT_USER_FAILURE,
});
