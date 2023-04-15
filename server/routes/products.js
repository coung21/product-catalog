import express from 'express'
import { getAllProduct, addNewProduct } from '../controllers/productController.js'

const router = express.Router()

// get all product
router.get('/', getAllProduct)

//post new product
router.post('/', addNewProduct)

//delete product


export default router