export const findProduct = (Products=[], Product_id) =>
  Products.find(Product => Product.id === Number(Product_id))