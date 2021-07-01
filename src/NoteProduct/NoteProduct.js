import React from 'react'
import {  Link } from 'react-router-dom'
import ApiContext from '../contexts/ApiContext';
import TokenService from '../services/TokenService'
import config  from '../config.js'
import './NoteProduct.css'
import moment from 'moment'

export default class NoteProduct extends React.Component {
  static defaultProps ={
    onDeleteProduct: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const id = this.props.id

    fetch(`${config.API_ENDPOINT}/products/${id}` , {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization':`bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(() => {
        this.props.onDeleteProduct(id)
      })
      .catch(error => {
        console.log(e)
        console.error({ error })
      })
  }


  render() {
    
    const {id,product_name, product_price, date_posted,description} = this.props
    
    return (
      <div className="result-form">
      <div className='Result'>
        <div className="resultElements">
        <div className='Result_month_taken'>
          <div className='Result_results_description'>
              name:
          {'  '}
            <span className='month_taken'>
              {product_name}
            </span> 
          </div> 
        
         </div>
         <div className='Result__meal_taken'>
          <div className='Resultresults_meal_taken'>
             price:
          {'   '}
            <span className='meal_taken'>
              {product_price}
            </span> 
          </div> 
         </div>
         <div className='Result_result_dates'>
          <div className='Result_result_date__tested'>
              date:
          {'   '}
            <span className='date_tested'>
            {moment.utc(date_posted).format("MM/DD/YYYY")}
              
            </span> 
          </div> 
         </div>

        
         <div className='Results_description'>
          <div className='Result_results_description'>
           Product Description:
            {'   '}
            <span className='Description'>
              {description}
            </span> 
          </div> 
         </div>
         <button
          className='Result_delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          DELETE
        </button>
        <Link  to={`/editproduct/${id}`} className="edit_product">Edit Product</Link>
      </div>
      </div>
      </div>

    )
  }
}