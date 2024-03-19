const auth=require('./auth-model')
const cart=require('./cart-model')
const product=require('./product-model')
const order=require('./order-model')
module.exports = 
{
 authModel:auth,
 cartModel:cart,
 productModel:product,
 orderModel:order
}