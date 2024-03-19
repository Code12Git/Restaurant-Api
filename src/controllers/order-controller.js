const {orderManager}=require('../services')
const { responseManager } = require('../services');

const create=async(request,response)=>{
    try{
        const result=await orderManager.create(request.body)
        return responseManager.sendSuccessResponse(response, result, 'Order created successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}



const get=async(request,response)=>{
    try{
        const result=await orderManager.get(request.params)
        return responseManager.sendSuccessResponse(response, result, 'Order fetched successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}
const getAll=async(request,response)=>{
    try{
        const result=await orderManager.getAll(request.params)
        return responseManager.sendSuccessResponse(response, result, 'All Order fetched successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}




module.exports={create,get,getAll}