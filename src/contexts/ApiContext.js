import React from 'react';

export default React.createContext({
  products:[],
  setUser: () => {},
  user:{},
  getProducts: () => {},
  addProduct: () => {},
  deleteProduct: () => {},
  onDeleteProduct: () => {},
  updateProduct:()=>{}
})