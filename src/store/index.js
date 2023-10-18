import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import userReducer from "../features/reducers/userSlice";
import cartReducer, {
  getTotals,
  populateCart,
} from "../features/reducers/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


store.dispatch(populateCart());
store.dispatch(getTotals());