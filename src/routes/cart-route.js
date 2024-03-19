const express=require('express');
const router = express.Router();
const {cartController}=require('../controllers')

//Create Cart
router.post("/", cartController.create);

module.exports = router;
