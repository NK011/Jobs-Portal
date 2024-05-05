import { configureStore } from "@reduxjs/toolkit";
import filterBarReducer from "./slices/filterBarSlice";
import jobsReducer from "./slices/jobsSlice";

export const store = configureStore({
    reducer: {
        filterBar: filterBarReducer,
        jobs: jobsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
