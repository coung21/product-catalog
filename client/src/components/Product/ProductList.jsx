import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/dataSlice';

function ProductList() {
  const products = useSelector(state => state.data.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  return (
    <div className='basis-2/3 overflow-y-scroll'>
      <ul className='mt-5'>
      {products.map(item => <ProductItem key={item._id} id={item._id} name={item.name} desc={item.description} price={item.price} />)}
      </ul>
    </div>
  )
}

export default ProductList