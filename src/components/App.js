import React from 'react'

import NavBar from './NavBar'
import CurrentConditionsContainer from '../containers/CurrentConditionsContainer'

const App = () => {
  return (
    <div>
      <NavBar brand="Current Conditions"/>
      <CurrentConditionsContainer />
    </div>
  )
}

export default App
