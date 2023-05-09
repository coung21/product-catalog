const express = require('express')
const cors = require('cors')
const products = require('./routes/products')
require('dotenv').config()

const PORT = process.env.PORT

//app server
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//route product
app.use('/api/product', products)



  app.listen(PORT, ()=>{
    console.log('App is running')
  })