import React, {Component} from 'react';
import './RegistrationForm.css';
import AuthApiService from '../services/auth-api-service'
// import {Redirect} from 'react-router-dom'

export default class RegistrationForm extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password, email } = ev.target

    AuthApiService.createUser({
      username: username.value,
      password: password.value,
      email:email.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  // return <Redirect to='login'/>

  render() {
    
    return (
      <form className='signUpForm-form' onSubmit={this.handleSubmitJwtAuth}>
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
          {/* <input type='submit' value='submit' /> */}
        </fieldset>
  
      </form>
    );
  }
};