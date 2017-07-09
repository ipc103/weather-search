import React from 'react'

const CurrentConditionsDetail = ({conditions}) => {
  const { city, weather, temp, message } = conditions

  if ( message ) {
    return <p>{message}</p>
  }

  return (
    <div>
      <h1>Current Conditions in {city}</h1>
      <p>The weather is {weather} with a temperature of {temp}</p>
    </div>
  )
}

CurrentConditionsDetail.defaultProps = {
  conditions: {
    message: 'No weather info found'
  }
}

export default CurrentConditionsDetail
