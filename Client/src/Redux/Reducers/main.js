import { combineReducers } from "redux";
import fetchModelsReducer from "./fetchModelsReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    fetchModelsReducer,
    authReducer,
   
})

export default rootReducer