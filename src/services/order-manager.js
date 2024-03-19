const {orderModel}=require('../models')
const _=require('lodash');
const { INVALID_REQUEST_DATA,NOT_FOUND } = require('../utils/errors');
const { AppError } = require('../utils');
const create = async (body) => {
    const { cartId, amount, address, status } = body;
    console.log(body)
    try {
       if(!cartId ||  !amount || !address || !status) {
        const error=INVALID_REQUEST_DATA;
        throw new AppError(error.code,error.message,error.statusCode)
       }
        const order = await orderModel.create( {cartId, amount, address, status} );
        console.log(order)
        await order.save()
        return order;
    } catch (err) {
        throw err;
    }
}
const get=async(params)=>{
    const {order}=params;
    try{
        const orderDetails=await orderModel.findById(order);
        if(_.isEmpty(orderDetails)){
             const error=NOT_FOUND
             throw new AppError(error.code,"Order not found",error.statusCode)
        }
        return orderDetails;    
    }catch(err){
        throw err;
    }
}

const getAll=async()=>{
     try{
        const orderDetails=await orderModel.find();
        if(_.isEmpty(orderDetails)){
             const error=NOT_FOUND
             throw new AppError(error.code,"No order found",error.statusCode)
        }    
        return orderDetails;
    }catch(err){
        throw err;
    }
}
module.exports={create,get,getAll}