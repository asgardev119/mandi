import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // cart items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    addToCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.items.findIndex(
        (item, id) => item.id === product
      );
      if (existingProductIndex >= 0) {
        state.items[existingProductIndex].quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item, id) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const product = state.items.find((item, key) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity = product.quantity - 1;
      }
    },
    

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectTotalCount = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  
} = cartSlice.actions;

export default cartSlice.reducer;
