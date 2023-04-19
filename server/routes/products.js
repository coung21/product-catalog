import express from 'express'
import { getAllProduct, addNewProduct, deleteProduct, updateProduct } from '../controllers/productController.js'

const router = express.Router()

// get all product
router.get('/', getAllProduct)

//post new product
router.post('/', addNewProduct)

//delete product
router.delete('/:id', deleteProduct)

//update product
router.patch('/:id', updateProduct)


export default router