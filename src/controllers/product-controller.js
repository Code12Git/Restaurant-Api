const { responseManager } = require('../services');
const {productManager}=require('../services')
const create=async(request,response)=>{
    try{
        const result=await productManager.create(request.body,request.params)
        return responseManager.sendSuccessResponse(response, result, 'Product created successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

const update=async(request,response)=>{
    try{
        const result=await productManager.update(request.body,request.params)
        return responseManager.sendSuccessResponse(response, result, 'Product updated successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

const deleteOne=async(request,response)=>{
    try{
        const result=await productManager.deleteOne(request.params)
        return responseManager.sendSuccessResponse(response, result, 'Product deleted successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}
const get=async(request,response)=>{
    try{
        const result=await productManager.get(request.params)
        return responseManager.sendSuccessResponse(response, result, 'Product fetched successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}
const getAll=async(request,response)=>{
    try{
        const result=await productManager.getAll(request.params)
        return responseManager.sendSuccessResponse(response, result, 'All products fetched successfully');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}


module.exports={create,update,deleteOne,getAll,get}