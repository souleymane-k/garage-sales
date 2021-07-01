import React from 'react'
import {Link} from 'react-router-dom'
import NoteProduct from '../NoteProduct/NoteProduct'
import ApiContext from '../contexts/ApiContext'
import ProductApiService from '../services/product-api-service'
import { findProduct } from '../Products-helpers'
import './Product.css'


export default class Product extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext
    state ={
      products:[]
    }
  handleDeleteProduct = ()=> {
    this.componentDidMount()
  }

  componentDidMount (){
    ProductApiService.getUserProducts()
    .then(data =>{
      this.setState({
        products:data
      })
    })
  }

  render() {
    const { products=[] } = this.context
    const { product_id } = this.props.match.params
    const product = findProduct(products, product_id) || {content: '' }
    return (
      <section className='NoteProduct'>
       
        <Link to={'/addproduct'} className="add-product">Add Product</Link>
       
        {this.state.products.map(product=>(
        <NoteProduct 
        key={product.id}
        id={product.id}
        product_name={product.product_name}
        product_price={product.product_price}
        date_posted= {product.date_posted}
        userid={product.userid}
        description={product.description}
        onDeleteProduct={this.handleDeleteProduct}
      />
        ))}
        
        <div className='NoteResult__content'>
        {product.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
      </section>
    )
  }
  
}