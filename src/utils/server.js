import axios from 'axios'
import store from '../store'
import { HashRouter as Router } from 'react-router-dom';

import {API_HOST} from '../constants/config'

let instance = axios.create({
  baseURL: API_HOST,
  timeout: 100000,
  headers: {}
})

const checkStatus = response => {
  if (response && response.status === 200) {
    return response.data
  }
}


instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    handleError(error.response)
    return Promise.reject(error)
  }
)

const handleError = response => {
  if (response && response.status === 403) {
    store.dispatch(shownGlobalError('NO_AUTH'))
  }
}

const catchFn = error => {
  if(error.request.status === 403) {
    window.location.href = '/adminhodai/login'
  } else {
    return {data: []}
  }
}

export default {
  post (url, data, config) {
    return instance({
      method: 'post',
      url,
      data: data
    }).then((response) => {
      return checkStatus(response)
    }).catch(catchFn)
  },
  put (url, data) {
    return instance({
      method: 'put',
      url,
      data: data
    }).then((response) => {
      return checkStatus(response)
    }).catch(catchFn)
  },
  get (url, params) {
    return instance({
      method: 'get',
      url,
      params,
    }).then((response) => {
      return checkStatus(response)
    }).catch(catchFn)
  },
  delete (url, params) {
    return instance({
      method: 'delete',
      url,
      params
    }).then((response) => {
      return checkStatus(response)
    }).catch(catchFn)
  }
}