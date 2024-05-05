import { createSlice } from "@reduxjs/toolkit";
import { JobDetails } from "../../commonUtils/types";

const initialState = {
    list: [],
    loading: false,
    error: "",
    page: 1,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setList: (state, action) => {
            const jobids = state.list.map((job: JobDetails) => job?.jdUid);
            const jobsToAdd = action.payload.filter(
                (job: JobDetails) => !jobids.includes(job.jdUid)
            );
            state.list.push(...jobsToAdd);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const { setList, setLoading, setError, setPage } = jobsSlice.actions;

export default jobsSlice.reducer;
