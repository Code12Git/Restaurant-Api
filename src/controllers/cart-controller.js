const {cartManager}=require('../services')
const { responseManager } = require('../services');

const create=async(request,response)=>{
    try{
        const result=await cartManager.create(request.body,request.params)
        return responseManager.sendSuccessResponse(response, result, 'Cart created successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

module.exports={create}