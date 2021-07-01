import React, { Component } from 'react';
import ApiContext from '../contexts/ApiContext';
import TokenService from '../services/TokenService'
import './AddProduct.css';
import config from '../config.js'

class AddProduct extends Component {
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

    this.setState({ error: null })
    console.log(`${config.API_ENDPOINT}/products`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    fetch(`${config.API_ENDPOINT}/products`, {
      method: 'POST',
      body: JSON.stringify(product),
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
            <h2>New Product</h2>
          </div>
          <div className='form-group'>
            <label htmlFor="product_name">Product*</label>
            <input
              type="text"
              className="form__input"
              name="product_name"
              id="product_name"
              required
              onChange={e => this.updateProduct_name(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="product_price">Price*</label>
            <input
              type="integer"
              className="form__input"
              name="product_price"
              id="product_price"
              required
              onChange={e => this.updateProduct_price(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="date_posted">date*</label>
            <input
              type="integer"
              className="form__input"
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

export default AddProduct;

