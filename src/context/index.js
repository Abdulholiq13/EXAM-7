import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartSlice from "./slices/cartSlices";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
