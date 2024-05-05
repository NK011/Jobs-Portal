import { useDispatch, useSelector } from "react-redux";
import {
    setExperience,
    setSalary,
    setLocation,
    setCompanyName,
    setjobRole,
} from "../../redux/slices/filterBarSlice";
import FilterDropdowns from "./FilterDropdowns/FilterDropdowns";
import styles from "./style.module.css";
import { filterNames, searchFilter } from "./utils";
import SearchFilter from "./SearchFilter/SearchFIlter";

function FilterBar() {
    // redux store
    const filters = useSelector((state) => state.filterBar);
    const dispatch = useDispatch();

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
                        value={filters[filter.name]}
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
                        value={filters[filter.name]}
                        name={filter.name}
                        placeholder={filter.placeholder}
                        handleFilterChange={handleFilterChange}
                    />
                ))}
            </div>
        </div>
    );
}

export default FilterBar;
