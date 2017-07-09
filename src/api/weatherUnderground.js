const BASE_URL = 'http://api.wunderground.com/api/563b9b32faee9f40/geolookup/conditions/q/'

function parseJson(res){
  return res.json()
}
export function fetchCurrentConditions(city, state){
  return fetch(`${BASE_URL}/${city},${state}.json`).then(parseJson)
}
