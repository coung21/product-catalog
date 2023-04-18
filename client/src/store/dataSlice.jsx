import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: []
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const resposne = await axios.get('http://localhost:5000/api/product');
  return resposne.data
})

export const postData = createAsyncThunk('data/postData', async (payload) => {
  const response = await axios.post('http://localhost:5000/api/product', payload);
  return response.data
})

export const deleteData = createAsyncThunk('data/deleteData' , async (payload) => {
  const response = await axios.delete(`http://localhost:5000/api/product/${payload}`)
  return response.data
})

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled,  (state, action) => {
      state.data = action.payload
    }).addCase(postData.fulfilled,  (state, action) => {
       state.data = [...state.data, action.payload]
    }).addCase(deleteData.fulfilled, (state, action) => {
      state.data = state.data.filter(item => item['_id'] !== action.payload['_id'])
    })
  }
})

export default dataSlice.reducer