const express=require('express')
const router=express.Router()
const {orderController}=require('../controllers')

router.post('/',orderController.create)
router.get('/:order',orderController.get)
router.get('/',orderController.getAll)


module.exports=router;