import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
   const { url } = params;
   const response = await axios.get(url);
   return response.data;
});

const initialState = {
   dataPizzas: [],
   status: 'loading', // loading | succes | error
};

const pizzasSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setdataPizza(state, action) {
         state.dataPizzas = action.payload;
      },
   },
   
   // extraReducers: {
   //    [fetchPizzas.pending]: (state, action) => {
   //       state.status = 'loading';
   //       state.dataPizzas = [];
   //    },
   //    [fetchPizzas.fulfilled]: (state, action) => {
   //       state.dataPizzas = action.payload;
   //       state.status = 'succes';
   //    },
   //    [fetchPizzas.rejected]: (state, action) => {
   //       state.status = 'error';
   //       state.dataPizzas = [];
   //    },
   // },

   extraReducers: (builder) => {
      builder
         .addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'loading';
            state.dataPizzas = [];
         })
         .addCase(fetchPizzas.fulfilled, (state, action) => {
            state.dataPizzas = action.payload;
            state.status = 'succes';
         })
         .addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.dataPizzas = [];
         });
   },


});

export const { setdataPizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;
