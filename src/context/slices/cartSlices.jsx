import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
  isAdded: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) => (inx === index ? { ...item, quantity: item.quantity + 1 } : item));
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
      state.isAdded = true;
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
      state.isAdded = false;
    },

    decrementCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index >= 0) {
        const item = state.value[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.value.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },

    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
      state.isAdded = false;
    },
  },
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart } = cartSlice.actions;
export default cartSlice.reducer;
