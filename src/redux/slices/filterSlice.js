import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   categoryId: 0,
   pageCount: 1,
   sort: { name: 'популярности (DESC)', sortproperty: 'rating' },
};

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoruId(state, action) {
         state.categoryId = action.payload;
      },
      setPageCount(state, action) {
         state.pageCount = action.payload
      },
      setSort(state, action) {
         state.sort = action.payload;
      },
   },
});

export const { setCategoruId, setSort, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
