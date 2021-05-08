import $API from '../services-base/http-interceptors.js'

export const ApiPostTest = ( data ) => {
  return $API.post('/test', data)
}