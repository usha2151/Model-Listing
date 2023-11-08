import { combineReducers } from "redux";
import fetchModelsReducer from "./fetchModelsReducer";
import authReducer from "./authReducer";
import fetchprofileReducer from "./modelindividualReducer";


const rootReducer = combineReducers({
    fetchModelsReducer,
    authReducer,
    fetchprofileReducer,
   
})

export default rootReducer