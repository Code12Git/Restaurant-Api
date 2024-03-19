const {cartModel}=require('../models');
const { INVALID_REQUEST_DATA } = require('../utils/errors');
const { AppError}=require('../utils')


const create = async (body) => {
    try {
        const { items } = body;
        if(_.isEmpty(items)){
            const error=INVALID_REQUEST_DATA
            throw new AppError(error.code,"Please put items in cart",error.statusCode)
        }
        const cart = await cartModel.create({ items: items });
        return cart;
    } catch (err) {
        throw err;
    }
};

module.exports={create}