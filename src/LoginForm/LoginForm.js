import React, {useState, useContext } from 'react'
import AuthApiService from '../services/auth-api-service'
import ApiContext from '../contexts/ApiContext';
import TokenService from '../services/TokenService'
import './LoginForm.css'


export default function  LoginForm (props) {

  const context = useContext(ApiContext);
  // static defaultProps = {
  //   onLoginSuccess: () => {}
  // }
  // static contextType = ApiContext;
  const [error, setError] = useState();
  // state = { error: null }


  const handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    // this.setState({ error: null })
    setError(null);
    const {username, password} = ev.target
    console.log('login form submitted')
     console.log({ username, password })

    AuthApiService.postLogin(
      username.value,
      password.value,
    )
      .then(res => {
  
        TokenService.saveAuthToken(res.authToken)
        username.value = ''
        context.setUser(true)
        // this.context.setUser(true)
        password.value = ''
        console.log('hello world')
        props.onLoginSuccess()
        // this.props.onLoginSuccess()
      })
      .catch(res => {
        console.log(res)
        setError(res.error)
        // this.setState({ error: res.error })
      })
  }

  // render() {
    // const { error } = this.state
    return (
      <form className='login-form' onSubmit={handleSubmitJwtAuth}>
        <div role='alert'>
          {error && <p className='red'>{error.message}</p>}
        </div>
        <fieldset className="loginForm">
        <div className='form-group'>
          <label htmlFor='LoginForm__username'>
            Username
          </label>
          <input
            required
            name='username'
            type="text"
            placeholder='username'
            id='LoginForm__username'>
          </input>
        </div>
        <div className='form-group'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            placeholder='password'
            id='LoginForm__password'>
          </input>
        </div>
        <div className='form-controls'>
        <button   className='submitButton' type='submit'>Login</button>
       </div>
        </fieldset>
      </form>
    )
  // }
}








