import config from '../config';
import TokenService from './TokenService';

const ProductsApiService = {
  postResult(result) {
    return fetch(`${config.API_ENDPOINT}/products`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(result),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUserProducts() {
    return fetch(`${config.API_ENDPOINT}/products`, {
      headers: {
        // 'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteProduct(product_id) {
    return fetch(`${config.API_ENDPOINT}/products/${product_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      
  },
  getProductById(product_id) {
    return fetch(`${config.API_ENDPOINT}/products/${product_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchProduct(product_id, newProductData) {
    return fetch(`${config.API_ENDPOINT}/products/${product_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newProductData)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : 1
      )
  }
}

export default ProductsApiService;