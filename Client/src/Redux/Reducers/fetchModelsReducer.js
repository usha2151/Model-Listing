// fetchModelsReducer.js
import {
  FETCH_MODELS_REQUEST,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_FAILURE,
  MODEL_BY_ID,
} from "../Actions/action";

import {
  SUBMIT_RATING_SUCCESS,
  SUBMIT_RATING_FAILURE,
  // ... other action types
} from "../Actions/action"; // Update the path if needed

const initialState = {
  models: [],
  singleModel: null,
  loading: false,
  error: null,
};

const fetchModelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MODELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MODELS_SUCCESS:
      return {
        ...state,
        models: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MODELS_FAILURE:
      return {
        ...state,
        models: [],
        loading: false,
        error: action.error,
      };
    case MODEL_BY_ID:
      return {
        ...state,
        singleModel: action.payload,
        loading: false,
      };
    case SUBMIT_RATING_SUCCESS:
      return {
        ...state,
      };
    case SUBMIT_RATING_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default fetchModelsReducer;
