import { Filters } from "../../commonUtils/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    setCompanyName,
    setExperience,
    setjobRole,
    setLocation,
    setSalary,
} from "../../redux/slices/filterBarSlice";
import FilterDropdowns from "./FilterDropdowns/FilterDropdowns";
import SearchFilter from "./SearchFilter/SearchFIlter";
import styles from "./style.module.css";
import { filterNames, searchFilter } from "./utils";

function FilterBar() {
    // redux store
    const filters: Filters = useAppSelector((state) => state.filterBar);
    const dispatch = useAppDispatch();

    // handlers
    const handleFilterChange = (filterName: string, value: string | number) => {
        switch (filterName) {
            case "experience":
                dispatch(setExperience(value));
                break;
            case "salary":
                dispatch(setSalary(value));
                break;
            case "location":
                dispatch(setLocation(value));
                break;
            case "companyName":
                dispatch(setCompanyName(value));
                break;
            case "jobRole":
                dispatch(setjobRole(value));
                break;
            default:
                break;
        }
    };

    return (
        <div className={styles.filter_container}>
            <div>
                {searchFilter.map((filter, key) => (
                    <SearchFilter
                        key={key}
                        value={filters[filter.name as keyof Filters]}
                        name={filter.name}
                        placeholder={filter.placeholder}
                        handleFilterChange={handleFilterChange}
                    />
                ))}
            </div>
            <div>
                {filterNames.map((filter, key) => (
                    <FilterDropdowns
                        key={key}
                        value={filters[filter.name as keyof Filters]}
                        name={filter.name as keyof Filters}
                        placeholder={filter.placeholder}
                        handleFilterChange={handleFilterChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default FilterBar;
