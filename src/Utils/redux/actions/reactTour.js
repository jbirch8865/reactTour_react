import * as Actions from "./actionConstants";
import { axiosapi } from "../../../index";
export function addTrainingStep(step) {
  return {
    type: Actions.ADD_TRAINING_STEP,
    step,
  };
}

export function removeTrainingStep(step) {
  return {
    type: Actions.REMOVE_TRAINING_STEP,
    step,
  };
}
export function removeAllTrainingSteps() {
  return {
    type: Actions.REMOVE_ALL_TRAINING_STEPS,
  };
}

export function gotoTrainingStep(step) {
  return {
    type: Actions.GOTO_TRAINING_STEP,
    currentStep: step,
  };
}
export function hideTrainingTour() {
  return {
    type: Actions.HIDE_TRAINING_TOUR,
  };
}

function setUserCompletedTrainings(completedtrainings) {
  return {
    type: Actions.GET_USER_COMPLETED_TRAININGS,
    completedtrainings,
  };
}

function setRegisteredTrainings(registeredtrainings) {
  return {
    type: Actions.GET_REGISTERED_TRAININGS,
    registeredtrainings,
  };
}


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
    axiosapi.get("/userpreferences")
      .then(function (response) {
        dispatch(setUserPreferences(response.data.userpreferences))
        return true
      })
  };
}




export function GetUserCompletedTrainings() {
  return (dispatch) => {
    axiosapi.get("/reacttour/usercompletedtrainingsteps")
      .then(function (response) {
        dispatch(setUserCompletedTrainings(response.data.usercompletedtrainingsteps))
        return true
      })
      .catch(function (error) {
        dispatch(removeAllTrainingSteps())
        return false
      });
  };
}

export function getRegisteredTrainings() {
  return (dispatch) => {
    axiosapi.get("/reacttour/trainingsteps")
      .then(function (response) {
        dispatch(setRegisteredTrainings(response.data.trainingsteps))
        return true
      })
      .catch(function (error) {
        dispatch(removeAllTrainingSteps())
        return false
      });
  };
}

export function CompleteUserTraining(name) {
  return dispatch => {
    axiosapi.post("/reacttour/usercompletedtrainingsteps",{name}).then(function (response) {
    }).catch(function (error) {});
  }
}
