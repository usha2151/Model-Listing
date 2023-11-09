import { combineReducers } from "redux";
import fetchModelsReducer from "./fetchModelsReducer";
import authReducer from "./authReducer";
import fetchprofileReducer from "./modelindividualReducer";
import { filtermodelsReducer } from "./filterModelReducer";

const rootReducer = combineReducers({
    fetchModelsReducer,
    authReducer,
    fetchprofileReducer,
    filtermodelsReducer
   
})

export default rootReducer