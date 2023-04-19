import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import products from './routes/products.js'
dotenv.config()

const PORT = process.env.PORT

//app server
const app = express()

//middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//route product
app.use('/api/product', products)


//connect to database
mongoose.connect(process.env.URI)
.then(() => {
  app.listen(PORT, ()=>{
    console.log('App is running')
  })
  console.log('connected to database')
})
.catch((err) => {
  console.log(err)
})
