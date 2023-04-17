import React, {useState} from 'react'

function AddForm() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  function submitHandler(e){
    e.preventDefault();
    const data = {
      title: title,
      description: desc,
      price: price,
    };
    console.log(data); // post data to http://localhost:5000/api/product/
    setTitle('');
    setDesc('');
    setPrice('');
  }
  return (
    <div className='basis-1/3 h-screen'>
      <form onSubmit={submitHandler}>
        <div className='flex flex-col items-center justify-start mt-9'>
          <h3 className='text-center text-xl font-bold mb-8 uppercase'>Add new product</h3>

          <label className='font-semibold mb-1' htmlFor="title">Title</label>
          <input id='title' className='border-[1px] outline-none rounded-md border-black px-4 py-1 mb-3' type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}/>

          <label className='font-semibold mb-1' htmlFor="description">Description</label>
          <textarea id='description' className='border-[1px] outline-none rounded-md border-black px-4 mb-3' cols={22} rows={5} value={desc} onChange={e => {setDesc(e.target.value)}}/>

          <label className='font-semibold mb-1' htmlFor="price">Price</label>
          <input className='border-[1px] outline-none rounded-md border-black px-4 py-1 mb-3' type='number' step={0.01} onChange={e => {setPrice(+e.target.value)}}/>
          <button type='submit' className='w-28 h-10 bg-emerald-400 rounded text-white mt-2'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm