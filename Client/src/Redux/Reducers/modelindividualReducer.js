// reducers/userReducer.js

const initialState = {
    models: [],
    error: null,
  };
  
  const modelsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MODELS_SUCCESS':
        return {
          ...state,
          models: action.payload,
          error: null,
        };
      case 'FETCH_MODELS_FAILURE':
        return {
          ...state,
          models: [],
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default modelsReducer;
  