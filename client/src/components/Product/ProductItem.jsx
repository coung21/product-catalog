import React, {useState, useCallback} from 'react'
import {BiTrash} from 'react-icons/bi'
import { AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteData, updateData } from '../../store/dataSlice';

function ProductItem({id, name, desc, price}) {
  const [editMode, setEditMode] = useState(false)
  const [nameValue, setNameValue] = useState(name);
  const [descValue, setDescValue] = useState(desc);
  const [priceValue, setPriceValue] = useState(price);
  const dispatch = useDispatch()
  function deleteProductHandler(){
    dispatch(deleteData(id))
  }
  function updateProductHandler(e) {
    e.preventDefault();
    const payload = {
      id: id,
      data: {
        name: nameValue,
        description: descValue,
        price: priceValue,
      },
    };
     dispatch(updateData(payload));
     setEditMode(false)
  }
  return (
    <li className='my-6 mx-4 flex justify-between items-center px-7 border-gray-800 border-2 p-3 rounded-md'>
      {editMode ? (
       <> 
          <div className='flex gap-2'>
            <input
              className='border-[1px] outline-none rounded-sm border-black px-1 mb-1'
              type='text'
              value={nameValue}
              onChange={(e)=>setNameValue(e.target.value)}
            />
            <input
              className='border-[1px] outline-none rounded-sm border-black px-1 mb-1'
              type='text'
              value={descValue}
              onChange={e=>setDescValue(e.target.value)}
            />
            <input
              type='number'
              className='border-[1px] outline-none rounded-sm border-black px-1 mb-1'
              value={priceValue}
              onChange={e=>setPriceValue(e.target.value)}
            />
          </div>
          <div className=''>
            <button
              type='button'
              className='mx-1'
              onClick={updateProductHandler}
            >
              <AiOutlineCheckCircle size={20} color='green' />
            </button>
          </div>
       </>
      ) : (
        <>
          <div className=''>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p>{desc}</p>
            <span className='text-lg text-yellow-800'>${price}</span>
          </div>
          <div className=''>
            <button
              type='button'
              className='mx-1'
              onClick={() => setEditMode(true)}
            >
              <AiOutlineEdit size={20} color='gray' />
            </button>
            <button
              type='button'
              className='mx-1'
              onClick={deleteProductHandler}
            >
              <BiTrash size={20} color='red' />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ProductItem