import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   items: [],
   totalPrice: 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      // addProductToCart(state, action){
      //    state.items.push(action.payload)
      //    state.totalPrice = state.items.reduce((acum, item) => acum + item.price, 0)
      // },

      addProductToCart(state, action) {
         const findItems = state.items.find((obj) => obj.id === action.payload.id);
         if (findItems) {
            findItems.count++;
            
           const test = findItems.typeofproduct.find((obj) => obj.sizeNames  === action.payload.size && obj.typeNames === action.payload.type)
           if (test) {
               test.count++
           }else {
            findItems.typeofproduct.push({
                     sizeNames: action.payload.size,
                     typeNames: action.payload.type,
                     count: 1,
            })
         }
           
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
               typeofproduct: [
                  {
                     sizeNames: action.payload.size,
                     typeNames: action.payload.type,
                     count: 1,
                  },
               ],
            });
         }

         state.totalPrice = state.items.reduce((acum, item) => acum + item.price * item.count, 0);
      },
      removeProductFromCart(state, action) {
      
         state.items = state.items.filter((obj) => obj.id !== action.payload);
         state.totalPrice = state.items.reduce((acum, item) => acum + item.price * item.count, 0);
      },
      clearProductFromCart(state) {
         state.items = [];
         state.totalPrice = 0;
      },

      minusItemCart(state, action) {
         const findItems = state.items.find((obj) => obj.id === action.payload.id);
         if (findItems) {
            findItems.count--;
            const test = findItems.typeofproduct.find((obj) => obj.sizeNames  === action.payload.size && obj.typeNames === action.payload.type)
            if (test) {
              if ( test.count > 0 ) {
                  test.count--
              }
            }
         }
         state.totalPrice = state.items.reduce((acum, item) => acum + item.price * item.count, 0);
      },
   },
});

export const { addProductToCart, removeProductFromCart, clearProductFromCart, minusItemCart } =
   cartSlice.actions;
export default cartSlice.reducer;
