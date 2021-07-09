import React, { Component } from 'react';
import ApiContext from '../contexts/ApiContext';
import TokenService from '../services/TokenService'
import './EditProduct.css';
import config from '../config.js'
import moment from 'moment'

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: {
        value: " ",
        touched: false
      },
      product_price: {
        value: " ",
        touched: false
      },
      date_posted: {
        value: " ",
        touched: false
      },
      description: {
        value: " ",
        touched: false
      },
      
      error: null,
    };
  }

  static contextType = ApiContext;

  componentDidMount(){
      const id = this.props.match.params.id;
      fetch(`${config.API_ENDPOINT}/products/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        }
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => {
              throw error
            })
          }
          return res.json()
        })
  
        .then(data => {
          console.log(data)
          console.log(moment(data.date_posted).format("YYYY-MM-DD"));
          this.setState({
          
              product_name:{ value: data.product_name, touched: true },
              product_price: { value: data.product_price, touched: true },
              date_posted: { value: moment(data.date_posted).format("YYYY-MM-DD"), touched: true },
              description: { value: data.description, touched: true }
          })
        })
        .catch(error => {
          console.log(error)
          this.setState({ error })
        })
    
      
  }

  updateProduct_name = (product_name) => {
    this.setState({ product_name: { value: product_name, touched: true } });
  }
  updateProduct_price = (product_price) => {
    this.setState({ product_price: { value: product_price, touched: true } });
  }
  updateDate_posted = (date_posted) => {
    this.setState({ date_posted: { value: date_posted, touched: true } });
  }
  updateDescription = (description) => {
    this.setState({ description: { value: description, touched: true } });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const {product_name, product_price,date_posted,description } = e.target;
    const product = {
      product_name: product_name.value,
      product_price: product_price.value,
      date_posted: date_posted.value,
      description: description.value,
    }
    console.log('message')
    const id = this.props.match.params.id;
    this.setState({ error: null })
    
    fetch(`${config.API_ENDPOINT}/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      // .then(res => {
      //   if (!res.ok) {
      //     return res.json().then(error => {
      //       throw error
      //     })
      //   }
      //   return res.json()
      // })

      .then(data => {
        product_name.value = '';
        product_price.value = '';
        date_posted.value = '';
        description.value = '';
        this.props.history.push('/home')
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      })
  }


  render() {
    return (
      <form className="add-product" onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <div>
            <h2>Edit Product</h2>
          </div>
          <div className='form-group'>
            <label htmlFor="product_name">Product*</label>
            <input
              type="text"
              className="form__input"
              value={this.state.product_name.value}
              name="product_name"
              id="product_name"
              required
              onChange={e => this.updateProduct_name(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="product_price">Price*</label>
            <input
            type="number" min="0.00" max="10000.00" step="0.01"
              className="form__input"
              value={this.state.product_price.value}
              name="product_price"
              id="product_price"
              required
              onChange={e => this.updateProduct_price(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="date_posted">date*</label>
            <input
              type="date"
              className="form__input"
              value={this.state.date_posted.value}
              name="date_posted"
              id="date_posted"
              required
              onChange={e => this.updateDate_posted(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="description">Description *</label>
            <input
              type="text"
              className="form__input"
              value={this.state.description.value}
              name="description"
              id="description"
              required
              onChange={e => this.updateDescription(e.target.value)}
            />
          </div>
        
          <div className="form__button__group">
            <button
              type="submit"
              className="form__button"
            // onClick={this.handleSubmit}
            >

              Save Product
            </button>


            <button type="reset" className="form__button_cancel"
              onClick={this.handleClickCancel}
            >
              Cancel
            </button>
          </div>

        </fieldset>
      </form>

    )
  }
}

export default EditProduct;

