import {
  ADD_NEW_USER,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_FAILURE,
  RESET_ADD_NEW_USER,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  RESET_USER_LOGIN
} from "../actions/types";

const INITIAL_STATE = {
  currentUser: { user: null, error: null, loading: false },
  loginUser: { user: null, error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        currentUser: { ...state.user, loading: true }
      };

    case ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        currentUser: { user: action.payload, error: null, loading: false }
      };
    case USER_LOGIN:
      return {
        ...state,
        loginUser: { ...state.user, loading: true }
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: { user: action.payload, error: null, loading: false }
      };
    default:
      return state;
  }
}
