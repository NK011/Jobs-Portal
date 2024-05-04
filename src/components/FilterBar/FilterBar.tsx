import React from "react";
import FilterDropdowns from "./FilterDropdowns/FilterDropdowns";
import { filterNames } from "./utils";

function FilterBar() {
    return (
        <div>
            {
                filterNames.map(filter => (
                    <FilterDropdowns name={filter.name} placeholder={filter.placeholder} />
                ))
            }
        </div>
    );
}

export default FilterBar;