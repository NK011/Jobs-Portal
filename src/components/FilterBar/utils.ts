export const searchFilter = [
    {
        key: 1,
        name: "location",
        placeholder: "Search by location",
    },
    {
        key: 2,
        name: "companyName",
        placeholder: "Search by company name",
    },
    {
        key: 3,
        name: "jobRole",
        placeholder: "Search by Job role",
    },
];
export const filterNames = [
    {
        key: 3,
        name: "experience",
        placeholder: "Experience",
    },
    {
        key: 5,
        name: "salary",
        placeholder: "Minimum base pay salary",
    },
];


const locationOptions = ["Remote", "Hybrid", "In-office"];

const salaryOptions = ["0", "10", "20", "30", "40", "50", "60", "70"];

const experienceOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const filterOptions = {
    ["experience"]: experienceOptions,
    ["location"]: locationOptions,
    ["salary"]: salaryOptions,
};
