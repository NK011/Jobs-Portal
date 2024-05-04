export const filterNames = [
    {
        key: 2,
        name: "size",
        placeholder: "Number of Employees",
    },
    {
        key: 3,
        name: "experience",
        placeholder: "Experience",
    },
    {
        key: 4,
        name: "site",
        placeholder: "Remote",
    },
    {
        key: 5,
        name: "salary",
        placeholder: "Minimum base pay salary",
    },
];

const sizeOptions = [
    // {
    //     min: 1,
    //     max: 10,
    // },
    // {
    //     min: 11,
    //     max: 20,
    // },
    // {
    //     min: 21,
    //     max: 50,
    // },
    // {
    //     min: 51,
    //     max: 100,
    // },
    // {
    //     min: 101,
    //     max: 200,
    // },
    // {
    //     min: 201,
    //     max: 500,
    // },
    // {
    //     min: 500,
    // },
];

const siteOptions = ["Remote", "Hybrid", "In-office"];

const salaryOptions = ["0L", "10l", "20L", "30L", "40L", "50L", "60L", "70L"];

const experienceOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const filterOptions = {
    ["size"]: sizeOptions,
    ["experience"]: experienceOptions,
    ["site"]: siteOptions,
    ["salary"]: salaryOptions,
};
