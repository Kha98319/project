import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    ADDAccounts: (state, action)=>{
        return [...state, action.payload];
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADDAccounts } = counterSlice.actions

export default counterSlice.reducer