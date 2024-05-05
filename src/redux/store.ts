import { configureStore } from "@reduxjs/toolkit";
import filterBarReducer from "./slices/filterBarSlice";
import jobsReducer from "./slices/jobsSlice";

export default configureStore({
    reducer: {
        filterBar: filterBarReducer,
        jobs: jobsReducer,
    },
});
