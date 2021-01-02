import { combineReducers } from "redux"
import trainingStepsReducer from "./reactTour"
import userPreferencesReducer from "./apicall"
const rootReducer = combineReducers({
  trainingSteps: trainingStepsReducer,
  userPreferences: userPreferencesReducer
})

export default rootReducer
