const {productModel}=require('../models')
const _ =require('lodash');
const {INVALID_REQUEST_DATA,NOT_FOUND}=require('../utils/errors')
const {AppError}=require('../utils')
const create=async(body)=>{
    const {title,description,image,categories,size,price,inStock}=body
    try{
        if(_.isEmpty(title)||_.isEmpty(description)||_.isEmpty(image)||_.isEmpty(categories)||_.isEmpty(size)||_.isEmpty(price)||_.isEmpty(inStock)){
            const error = INVALID_REQUEST_DATA;
            error.message = "Please enter all fields";
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const product=await productModel.create({title,description,image,categories,size,price,inStock})
        return product;
    }catch(err){
        throw err;
    }
}


const update = async (body, params) => {
    const { title, description, image, categories, size, price, inStock } = body;
    const { product } = params;
    try {
        const productDetails = await productModel.findByIdAndUpdate(product, {
            title,
            description,
            image,
            categories,
            size,
            price,
            inStock
        }, { new: true }); 
        if (!productDetails) {
            const error = NOT_FOUND;
            throw new AppError(error.code,"Product not found!", error.statusCode);
        }
        return productDetails;
    } catch (err) {
        throw err;
    }
};

const deleteOne = async ( params) => {
    const { product } = params;
    try {
        const productDetails = await productModel.findByIdAndDelete(product,{new:true});        
        if (!productDetails) {
            const error = NOT_FOUND;
            throw new AppError(error.code,"Product not found!", error.statusCode);
        }
        return productDetails;
    } catch (err) {
        throw err;
    }
};

const get=async(params)=>{
     const { product } = params;
    try {
        const productDetails = await productModel.findById(product);        
        if (!productDetails) {
            const error = NOT_FOUND;
            throw new AppError(error.code,"Product not found!", error.statusCode);
        }
        return productDetails;
    } catch (err) {
        throw err;
    }
}

const getAll=async()=>{
    try {
        const product = await productModel.find();        
        if (!product) {
            const error = NOT_FOUND;
            throw new AppError(error.code,"No Product Found!", error.statusCode);
        }
        return product;
    } catch (err) {
        throw err;
    }
}


module.exports={create,update,deleteOne,getAll,get}