import { reactTourapi } from "../../api";
import * as Actions from "./actionConstants"

function setUserPreferences(userpreferences) {
  return {
    type: Actions.GET_USER_PREFERENCES,
    userpreferences,
  };
}

function setUserPreferencesLoading()
{
  return {
    type: Actions.GET_USER_PREFERENCES_LOADING
  };
}

export function getUserPreferences() {
  return (dispatch) => {
    dispatch(setUserPreferencesLoading())
    reactTourapi.get("/userpreferences")
      .then(function (response) {
        dispatch(setUserPreferences(response.data.userpreferences))
        return true
      })
  };
}