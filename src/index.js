import React from 'react'
import SubTourWrapper from './Components/Presentation/ReactTour/TourWrapper'
import { Provider } from 'react-redux'
import configureStore from './Utils/redux/configureStore'
import InitialLoad from './InitialLoad'
import SubTrainingStep from './Components/Functional/ReactTour/TrainingStep'
export const store = configureStore()

export let axiosapi = null
export default function TourWrapper(props) {
  axiosapi = props.api
  return (
    <Provider store={store}>
      <InitialLoad />
      <SubTourWrapper />
    </Provider>
  )
}

export function TrainingStep(props) {
  return <SubTrainingStep />
}