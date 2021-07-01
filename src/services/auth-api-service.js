import config from '../config';
import TokenService from '../services/TokenService';

const AuthApiService = {
  async postLogin(username, password) {
    const loginData = {username, password};
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(loginData)
    });
    return await ((!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json().then(res_1 => {
        TokenService.saveAuthToken(res_1.authToken);
        TokenService.saveVisitedObj();
        return res_1
      }));
      
  },

  

  async createUser(userData){
    const res = await fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  },

  // async User() {
  //   const res = await fetch(`${config.API_ENDPOINT}/auth/user`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${TokenService.getAuthToken()}`
  //     }
  //   })

  //   if (!res.ok) {
  //     return res.json().then(e => Promise.reject(e))
  //   }

  //   return res.json();
  // }
}

export default AuthApiService;





