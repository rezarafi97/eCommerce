import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import userReducer from "../features/reducers/userSlice";
import cartReducer, {
  getTotals,
  populateCart,
} from "../features/reducers/cartSlice";

import wishlistReducer, {
  // getTotalsWishlist,
  populateWishlist,
} from "../features/reducers/wishlistSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


store.dispatch(populateCart());
store.dispatch(getTotals());

// store.dispatch(getTotalsWishlist());
store.dispatch(populateWishlist());