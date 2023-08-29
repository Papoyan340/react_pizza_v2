import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   categoryId: 0,
   pageCount: 1,
   searcValue: '',
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
      setFilters(state, action){
         state.categoryId = Number(action.payload.categoryId);
         state.pageCount = Number(action.payload.pageCount);
         state.sort = action.payload.sort;
      },
      setSearchValue(state, action){
         state.searcValue = action.payload
      }
   },
});

export const { setCategoruId, setSort, setPageCount, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
