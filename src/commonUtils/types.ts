export interface JobDetails {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number;
    minJdSalary: number | null;
    salaryCurrencyCode: string;
    location: string;
    minExp: number;
    maxExp: number;
    jobRole: string;
    companyName: string;
    logoUrl: string;
}

export interface FilterOptions {
    experience: number[];
    salary: string[];
}

export interface Filters {
    experience: number;
    location: string;
    salary: string;
    companyName: string;
    jobRole: string;
}

export interface Filter {
    [key: string]: number | string;
}

export interface JobsSliceState {
    list: JobDetails[];
    loading: boolean;
    error: string;
    page: number;
}
