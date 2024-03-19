const express=require('express')
const router=express.Router()
const {productController}=require('../controllers')

router.post('/',productController.create)
router.put('/:product',productController.update)
router.delete('/:product',productController.deleteOne)
router.get('/:product',productController.get)
router.get('/',productController.getAll)

module.exports=router;