import { Product } from '../models/productModel.js'

export const getAllProduct = async (req, res) => {
  const pr = await Product.find({name: "a book"})
 res.status(200).json(pr)
}


export const addNewProduct = async (req, res) => {
  const {name, description, price} = req.body 
  try {
    const newProduct = await Product.create({name, description, price})
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(400).json({err: error.message})
  }
}