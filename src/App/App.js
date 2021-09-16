import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import Goods from '../store';
import Product from '../Products/Product';
import LandingPage from '../LandingPage/LandingPage'
import Header from '../Header/Header';
import config  from '../config.js'
import PublicOnlyRoute from '../Direction/PublicOnlyRoute'
import PrivateRoute from '../Direction/PrivateRoute'
import LoginForm from '../LoginForm/LoginForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import AddProduct from '../AddProduct/AddProduct'
import TokenService from '../services/TokenService'
import ApiContext from '../contexts/ApiContext'
import EditProduct from '../EditProduct/EditProduct'
 



export default class App extends React.Component  {

  state={
    products:[],
    user:TokenService.hasAuthToken()
  }

  renderAuthError = () => {
    return (
      <div className='auth-error'>
      
        <h4>Oh no!</h4>
        <p>
          There was an error trying to fetch your user information.
        </p>
        <p>
          Try Again
        </p>
      </div>
    )
  }

  // Fetch data
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/products`,{
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization':`bearer ${TokenService.getAuthToken()}`
    }
  })
    .then((response) => response.json())
    .then((json)=> this.setState({results: json}))
    
 }

 // Handle delete Product
 handleDeleteProduct = productId => {
  this.setState({
      products: this.state.products.filter(product => product.id !== productId)
  });
};

// handle delete Product
handleAddProduct = product => {
  this.setState({
      products: [...this.state.products, product]
  })
}

  setUser=(user)=>{
    this.setState({user})
  }


  render() {
    const currentValue = {
      user:this.state.user,
      setUser:this.setUser
    }

  return (
    <ApiContext.Provider value={currentValue}>
    <main className='App'>
      <Header />
      <Switch>
                <PublicOnlyRoute exact path={'/'} component={LandingPage}/>
                <PublicOnlyRoute path={'/login'} component={LoginForm}/>
                <PublicOnlyRoute path={'/register'} component={RegistrationForm}/>
                <Route path={'/home'} component={Product}/>
                <PrivateRoute path={'/addproduct'} component={AddProduct}/>
                <PrivateRoute path={'/editproduct/:id'} component={EditProduct}/>
                <Route component={NotFoundPage}/>
       </Switch>
       
    </main>
    </ApiContext.Provider>
  );
}
}

