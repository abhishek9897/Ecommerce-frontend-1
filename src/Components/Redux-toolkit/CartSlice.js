import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    
  },
  reducers: {
    AddToCart: (state, action) => {
      const item={
        item:action.payload.item,
       quantity: action.payload.quantity
      }
      return {
        ...state,
        item: [...state.item, item],
      };
    },
    RemoveFromCart: (state, action) => {
      console.log(action)
      const removedItem = state.item.find(
        (ele) => ele.item.id === action.payload.item.id
      );
      
      if (removedItem) {
        return {
          ...state, 
          item: state.item.filter((ele) => ele.item.id !== action.payload.item.id),
        };
      }

      return state;
    },
  },
});

export const { AddToCart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;
