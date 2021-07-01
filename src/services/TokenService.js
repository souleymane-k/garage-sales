import config from '../config.js'


const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.API_TOKEN, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.API_TOKEN)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.API_TOKEN)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  saveVisitedObj() {
    const visitedObj = { visited: true };
    window.localStorage.setItem('visitedObj', JSON.stringify(visitedObj));
  },
  hasVisitedObj() {
    const hasVisited = window.localStorage.getItem('visitedObj');
    return !!hasVisited;
  },
  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`)
  }
}

export default TokenService