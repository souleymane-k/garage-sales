import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import ApiContext from '../contexts/ApiContext';
import TokenService from '../services/TokenService'
import './LoginForm.css'


export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  static contextType = ApiContext;
  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
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
        this.context.setUser(true)
        password.value = ''
        console.log('hello world')
        this.props.onLoginSuccess()
      })
      .catch(res => {
        console.log(res)
        this.setState({ error: res.error })
      })
  }

  render() {
    // console.log('login form')
    const { error } = this.state
    // console.log(error)
    return (
      <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
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
  }
}











//////
// import React, { Component } from 'react'
// import { Button, Input } from '../Direction/Direction'

// export default class LoginForm extends Component {
//   static defaultProps = {
//     onLoginSuccess: () => {}
//   }

//   state = { error: null }

//   handleSubmitBasicAuth = ev => {
//     ev.preventDefault()
//     const { username, password } = ev.target

//     console.log('login form submitted')
//     console.log({ username, password })

//     username.value = ''
//     password.value = ''
//     this.props.onLoginSuccess()
//   }

//   render() {
//     const { error } = this.state
//     return (
//       <form
//         className='LoginForm'
//         onSubmit={this.handleSubmitBasicAuth}
//       >
//         <div role='alert'>
//           {error && <p className='red'>{error}</p>}
//         </div>
//         <div className='username'>
//           <label htmlFor='LoginForm__username'>
//             Username
//           </label>
//           <Input
//             name='username'
//             id='LoginForm__username'>
//           </Input>
//         </div>
//         <div className='password'>
//           <label htmlFor='LoginForm__password'>
//             Password
//           </label>
//           <Input
//             name='password'
//             type='password'
//             id='LoginForm__password'>
//           </Input>
//         </div>
//         <Button type='submit'>
//           Login
//         </Button>
//       </form>
//     )
//   }
// }





