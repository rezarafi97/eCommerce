import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/apiSlice";
// import blogsReducer from "../reducers/blogSlice";
// import usersReducer, { extendedApiSlice } from "../reducers/userSlice";

export const store = configureStore({
    reducer: {
        // blogs: blogsReducer,
        // users: usersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// store.dispatch(extendedApiSlice.endpoints.getUsers.initiate());
