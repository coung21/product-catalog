const prisma = require('../db/db.mysql')

 const getAllProduct = async (req, res) => {
  try {
    const {name, description, price} = req.body
    const products = await prisma.product.findMany()
    return res.status(200).json(products)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};

 const addNewProduct = async (req, res) => {
 try {
  const {name, description, price} = req.body
  const newProduct = await prisma.product.create({
    data: {
      name: name,
      description: description,
      price: price
    }
  })
  if(!newProduct) {
    return res.status(500).json({message: 'something wen wrong'})
  }
  return res.status(200).json(newProduct)
 } catch (error) {
      res.status(400).json({ message: error.message });
 }
};

 const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id
    const deletedProduct = await prisma.product.delete({
      where: {
        id: parseInt(id)
      }
    })
    return res.status(200).json(deletedProduct)
  } catch (error) {
        res.status(400).json({ message: error.message });
  }
};

//update
 const updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    const {name, description, price} = req.body
    const updatedProduct = await prisma.product.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name: name,
        description: description,
        price: parseFloat(price)
      }
    })
    return res.status(200).json(updatedProduct)
  } catch (error) {
    // res.status(400).json({ message: error.message });
    console.log(error.message)
  }
};

module.exports = {
  getAllProduct,
  addNewProduct,
  deleteProduct,
  updateProduct
}
