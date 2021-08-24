import React, {useState} from 'react';
import './RegistrationForm.css';
import AuthApiService from '../services/auth-api-service'
// import {Redirect} from 'react-router-dom'

export default function RegistrationForm (props) {

  // static defaultProps = {
  //   onLoginSuccess: () => {}
  // }

  // state = { error: null }
 const [error, setError] = useState(null);

  const handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    setError(null);

    const { username, password, email } = ev.target

    AuthApiService.createUser({
      username: username.value,
      password: password.value,
      email:email.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        props.onLoginSuccess()
      })
      .catch(res => {
        setError(res.error)
      })
  }
  // return <Redirect to='login'/>

  
    return (
      <form className='signUpForm-form' onSubmit={handleSubmitJwtAuth}>
        <fieldset className="registrationForm">
          <h3>Create an account</h3>
          <div className="form-group">
          <label className='signUpForm-form__username-label' htmlFor='signUpForm-form__username'>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='SignUpForm-form__username'
            placeholder='username'
            required
          />
          </div>
          <div className="form-group">
          <label className='signUpForm-form__email-label' htmlFor='signUpForm-form__email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='SignUpForm__email'
            placeholder='email'
            required
          />
          </div>
          <div className="form-group">
          <label className='signUpForm-form__password-label' htmlFor='signUpForm-form__password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='SignUpForm-form__password'
            placeholder='password'
            required
          />
          </div>
          <div className="form-group">
          <label className='SignUpForn-form__password-repeat-label' htmlFor='signUpForm-form__password-repeat'>
            Confirm Password
          </label>
          <input
            type='password'
            name='passwordRepeat'
            id='SignUpForn-form__password-repeat'
            placeholder='confirm password'
            required
          />
          </div>
          <button className="btn" type='submit'>Submit</button>
          {error}
        </fieldset>
  
      </form>
    );
  
};

RegistrationForm.defaultProps = {
  onLoginSuccess: () => {}
}
