import { createSlice  } from "@reduxjs/toolkit";

// const initialState = {value : [{}]}
const initialState = {
  value: [
    {
      id:1,
      name: 'aaram',
      age: 23
    },
    {
      id:2,
      name: 'Karen',
      age: 27
    },
    {
      id:3,
      name: 'Hayk',
      age: 66
    }
  ]
}




export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action){
      return {
        ...state,  value: [...state.value, action.payload]
      }
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { addUser } = counterSlice.actions

export default counterSlice.reducer