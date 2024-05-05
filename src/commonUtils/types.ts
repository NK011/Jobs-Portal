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
    location: string[];
    salary: string[];
}