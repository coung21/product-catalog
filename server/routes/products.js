import express from 'express'
import { getAllProduct, addNewProduct, deleteProduct } from '../controllers/productController.js'

const router = express.Router()

// get all product
router.get('/', getAllProduct)

//post new product
router.post('/', addNewProduct)

//delete product
router.delete('/:id', deleteProduct)


export default router