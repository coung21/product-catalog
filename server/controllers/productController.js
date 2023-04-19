import { Product } from '../models/productModel.js';
import mongoose, { mongo } from 'mongoose';

export const getAllProduct = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};

export const addNewProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newProduct = await Product.create({ name, description, price });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'no such product' });
  }
  const product = await Product.findOneAndDelete({ _id: id });
  res.status(200).json(product);
};

//update
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name ,description, price } = req.body;
  console.log('updating product')
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'no such product' });
  }
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: name,
        description: description,
        price: price,
      },
    },
    {new: true}
  );
  res.status(200).json(updatedProduct)
};
