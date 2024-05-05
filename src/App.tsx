import { useEffect, useRef, useState } from "react";
import "./App.css";
import CompanyCard from "./components/ComponyCard/CompanyCard";
import FilterBar from "./components/FilterBar/FilterBar";
import { setList, setLoading, setPage } from "./redux/slices/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import PageEndLoader from "./components/Loaders/PageEndLoader/PageEndLoader";
import { JobDetails } from "./commonUtils/types";

function App() {
    // redux store
    const dispatch = useDispatch();
    const { list: jdList, loading, page } = useSelector((state) => state.jobs);
    const filters = useSelector((state) => state.filterBar);
    const { experience, location, companyName, salary, jobRole } = filters;

    // states
    const [filteredJobs, setFilteredJobs] = useState(jdList);
    const pageRef = useRef("");

    // handlers
    const fetchJobs = async () => {
        dispatch(setLoading(true));
        const response = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    limit: 10,
                    offset: (pageRef.current - 1) * 10,
                }),
            }
        );

        const data = await response.json();
        dispatch(setList(data.jdList));
        dispatch(setLoading(false));
        dispatch(setPage(pageRef.current + 1));
    };

    const applyFilters = () => {
        // check for filters and filter out the jobs list
        let jobs = jdList;
        if (experience) {
            jobs = jobs.filter(
                (job: JobDetails) => job.minExp <= experience && experience < job.maxExp
            );
        }

        if (location) {
            jobs = jobs.filter((job: JobDetails) =>
                job.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        if (salary) {
            jobs = jobs.filter(
                (job: JobDetails) => job.minJdSalary <= salary && salary < job.maxJdSalary
            );
        }

        if (companyName) {
            jobs = jobs.filter((job: JobDetails) =>
                job.companyName.toLowerCase().includes(companyName)
            );
        }
        if (jobRole) {
            jobs = jobs.filter((job: JobDetails) =>
                job.jobRole.toLowerCase().includes(jobRole)
            );
        }

        setFilteredJobs(jobs);
    };

    // useEffects
    useEffect(() => {
        if (jdList.length > 0) {
            applyFilters();
        }
    }, [jdList]);

    useEffect(() => {
        pageRef.current = page;
    }, [page]);

    useEffect(() => {
        applyFilters();
    }, [experience, location, companyName, jobRole, salary]);

    useEffect(() => {
        // fetch jobs on page end
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fetchJobs();
                }
            });
        });

        observer.observe(document.querySelector("#page-end"));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <FilterBar />
            <div className="jobs_list">
                {filteredJobs.length === 0 && !loading ? (
                    <h1>Oops not data found :(</h1>
                ) : (
                    ""
                )}
                {filteredJobs.map((job, index) => (
                    <CompanyCard key={index} jobDetails={job} />
                ))}
            </div>
            {loading ? <PageEndLoader /> : ""}
            <div id="page-end"></div>
        </div>
    );
}

export default App;
