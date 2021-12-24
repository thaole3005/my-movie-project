import { userType } from "../actionType/actionType";

const initialState = {
  isLoading: false,
  status: "",
  user: {},
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userType.CREAT_USER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }
    case userType.CREAT_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Register_Success",
      };
    }
    case userType.CREAT_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Register_Failure",
      };
    }

    default:
      return state;
  }
};

export default userReducer;
