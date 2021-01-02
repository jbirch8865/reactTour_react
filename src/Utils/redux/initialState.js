const userPreferences = {loading:true,userPreferences:[]}
const trainingSteps = {
  steps: [],
  showTour: true,
  currentStep: 0,
  loadGroups: [],
  registered: false,
  userCompleted: [false]
}
const initialState = {
  trainingSteps,
  userPreferences
}

export default initialState
