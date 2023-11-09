import { SUCCESS_FILTER_MODEL, FAILURE_FILTER_MODEL, REQUEST_MODEL_FILTER } from "../Actions/action";
const initialState = {
    models: [],
    loading: false,
    error: null,
  };
  
  export const filtermodelsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUCCESS_FILTER_MODEL:
        return {
          ...state,
          models: action.payload,
          loading: false,
          error: null,
        };
      case FAILURE_FILTER_MODEL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case REQUEST_MODEL_FILTER:
        return {
          ...state,
          loading: true,
          error: null,
        };
      default:
        return state;
    }
  };