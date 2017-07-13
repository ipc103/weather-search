const currentConditions = {
  location: {
    city: 'Pittsburgh',
    state: 'PA'
  },
  current_observation: {
    weather: 'Partly Cloudy',
    temperature_string: '76.6 F (24.8 C)'
  }
}

export function fetchCurrentConditions(city, state){
  return new Promise((resolve, reject) => {
    if (city === 'Pittsburgh') {
      resolve(currentConditions)
    } else {
      resolve({})
    }
  })
}
