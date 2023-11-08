// fetchModelsReducer.js
import {
  FETCH_MODELS_PROFILE_REQUEST,
  FETCH_MODELS_PROFILE_SUCCESS,
  FETCH_MODELS_PROFILE_FAILURE,
} from "../Actions/action";


const initialState = {
  models: [],
  loading: false,
  error: null,
};

const fetchprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MODELS_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MODELS_PROFILE_SUCCESS:
      return {
        ...state,
        models: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MODELS_PROFILE_FAILURE:
      return {
        ...state,
        models: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default fetchprofileReducer;
