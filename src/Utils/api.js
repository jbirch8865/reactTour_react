import { planningAuthProvider } from './msauth'
import axios from 'axios'

export async function getBackendAzureADUserAccessToken() {
  try {
    const token = await planningAuthProvider.getAccessToken()
    return token.accessToken
  } catch (e) {
    logging(e, 'error')
  }
  throw new Error()
}

async function requestHandler(config) {
  const token = await getBackendAzureADUserAccessToken()
  config.headers.Authorization = token
  return config
}

async function responseHandler(response) {
  return response
}

async function errorResponseHandler(error) {
  if (typeof error.response === 'undefined') {
    throw new Error(error)
  }
  return error.response
}

export const reactTourapi = axios.create({
  baseURL: process.env.REACT_APP_REACT_TOUR_URI + '/api',
  timeout: 5000
})

reactTourapi.interceptors.request.use(requestHandler)
reactTourapi.interceptors.response.use(responseHandler, errorResponseHandler)
