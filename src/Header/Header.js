import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import './Header.css';

import AuthContext from '../contexts/AuthContext';

export default class Header extends React.Component {

  static contextType = AuthContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setUsername(null);
    this.context.setUser(null);
    this.context.setUserId(null);
  }


  // to={`/${this.context.usernname}/AddResult`
  renderLogoutLink() {
    return (
      <div className='site-nav__dir--logged-in'>
          {' '}
        <Link to={'/addproduct'} className='addProductlink'>
           Product
          </Link>
          {' '}
        <Link onClick={this.handleLogoutClick} to='/' className='logoutlink'>
          Logout
          </Link>
        
  
      </div>
    );
  };

  renderLoginLink() {
    return (
      <div className='site-nav__dir'>
        <Link to='/register' className='registerLink'> Register</Link>
        <Link to='/login' className='loginLink'> Login </Link>
      </div>
    );
  };

  render() {
    return (
      <nav className='site-nav'>
        <h1>
          <Link className="titlelink"  to='/'>
          Garages Sales
          </Link>
        </h1>
        {
          TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
        }
      </nav>
    );
  };
};





