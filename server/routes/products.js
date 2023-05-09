const express = require('express')
const { getAllProduct, addNewProduct, deleteProduct, updateProduct }  = require('../controllers/productController')

const router = express.Router()

// get all product
router.get('/', getAllProduct)

//post new product
router.post('/', addNewProduct)

//delete product
router.delete('/:id', deleteProduct)

//update product
router.patch('/:id', updateProduct)


module.exports = router