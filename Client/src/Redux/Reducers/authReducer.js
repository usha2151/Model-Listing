import { SIGN_UP_SUCCESS, LOGIN_SUCCESS,TOKEN_VERIFIED_SUCCESS } from "../Actions/action";

const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
    console.log(action);
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.user, // Use action.payload instead of action.model
      };
      case LOGIN_SUCCESS:
              return {
                ...state,
                user: action.user, // Use action.payload instead of action.model
              };
              case TOKEN_VERIFIED_SUCCESS:
              return {
                ...state,
                user: action.user, // Use action.payload instead of action.model
              };
    default:
      return state;
  }
};

export default authReducer;
