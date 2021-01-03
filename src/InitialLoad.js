import React from 'react'
import { useEffect } from 'react'
import * as Actions from './Utils/redux/actions/reactTour'
import { connect } from 'react-redux'

function InitialLoad(props) {
  useEffect(() => {
    props.getUserPreferences()
  }, [])
  return <React.Fragment></React.Fragment>
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserPreferences: () => dispatch(Actions.getUserPreferences())
  }
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialLoad)
