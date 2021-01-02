import React from 'react'
import styles from './styles.module.css'
import configureStore from './Utils/redux/configureStore'
import SubTrainingStep from './TrainingStep'
export const store = configureStore()

export const TrainingStep = (props) => {
  return (
    <SubTrainingStep
      trainingName={props.trainingName}
      trainingImportance={props.trainingImportance}
      stepInteraction={props.stepInteraction}
      title={props.title}
    />
  )
}
