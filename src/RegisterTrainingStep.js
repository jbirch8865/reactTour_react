import { reactTourapi } from './Utils/api'
import GetUserCompletedTrainings from './GetUserCompletedTrainingSteps'
import { store } from './index'

function getStore() {
  const state = store.getState()
  return state
}
export default function RegisterTrainingStep(name, importance) {
  Array.isArray(getStore().trainingSteps.registered)
    ? getStore().trainingSteps.registered.filter((step) => step.name === name)
        .length === 0 &&
      reactTourapi
        .post('/reacttour/trainingsteps', {
          name,
          importance
        })
        .then(function (response) {
          GetUserCompletedTrainings()
        })
        .catch(function (error) {
        })
    : setTimeout(() => RegisterTrainingStep(name), 300)
  return <></>
}
