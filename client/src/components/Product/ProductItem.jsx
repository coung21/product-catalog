import React from 'react'
import {BiTrash} from 'react-icons/bi'

function ProductItem({id, name, desc, price}) {
  return (
    <li className='my-6 mx-4 flex justify-between items-center px-7 border-gray-800 border-2 p-3 rounded-md'>
      <div className=''>
        <h2 className='text-xl font-bold'>{name}</h2>
        <p>
         {desc}
        </p>
        <span className='text-lg text-yellow-800'>${price}</span>
      </div>
      <div className=''>
        <button type='button' className=''>
          <BiTrash size={20} color='red'/>
        </button>
      </div>
    </li>
  );
}

export default ProductItem