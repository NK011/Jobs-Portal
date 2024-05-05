import { createSlice } from "@reduxjs/toolkit";

export const filterDefaults = {
    experience: 0,
    location: "",
    salary: "",
    companyName: "",
    jobRole: ""
};

export const filterBarSlice = createSlice({
    name: "filterBarSlice",
    initialState: filterDefaults,
    reducers: {
        setExperience: (state, action) => {
            state.experience = action.payload
        },
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setSalary: (state, action) => {
            state.salary = action.payload
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload
        },
        setjobRole: (state, action) => {
            state.jobRole = action.payload
        }
    },
});

export const {
    setExperience,
    setSalary,
    setLocation,
    setCompanyName,
    setjobRole
} = filterBarSlice.actions;

export default filterBarSlice.reducer;
