import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductItem from './ProductItem'

function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProductList = async () => {
      const response = await axios.get('http://localhost:5000/api/product');
      const data = await response.data
      console.log(data)
      setProducts([...data])
    }
    fetchProductList()
  }, [])
  return (
    <div className='basis-2/3 overflow-y-scroll'>
      <ul className='mt-5'>
      {products.map(item => <ProductItem key={item._id} id={item._id} name={item.name} desc={item.description} price={item.price} />)}
      </ul>
    </div>
  )
}

export default ProductList