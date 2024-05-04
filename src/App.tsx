import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterBar from "./components/FilterBar/FilterBar";
import CompanyCard from "./components/ComponyCard/CompanyCard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* filter bar */}
            <FilterBar />
            {/* jobs list */}
            <div className="jobs_list">
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
            </div>
        </div>
    );
}

export default App;
