import { useEffect, useRef, useState } from "react";

import { ArrowDropDown, ArrowDropUp, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FilterOptions } from "../../../commonUtils/types";
import { filterDefaults } from "../../../redux/slices/filterBarSlice";
import styles from "../style.module.css";
import { filterOptions } from "../utils";

type Props = {
    name: keyof FilterOptions; // Specify that name should be one of the keys of FilterOptions
    placeholder: string;
    value: string | number;
    handleFilterChange: (name: string, value: string | number) => void;
};

function FilterDropdowns({
    value,
    name,
    placeholder,
    handleFilterChange,
}: Props) {
    // states
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);
    const inputRef = useRef<HTMLDivElement>(null);

    // handlers
    const handleSelect = (value: string | number) => {
        handleFilterChange(name, value);
    };

    // useEffects
    useEffect(() => {
        // set input value if already in store
        setSearchTerm(value ? value : "");
    }, [value]);

    useEffect(() => {
        // filter options based on search
        if (searchTerm) {
            const options = filteredOptions.filter((opt) => {
                return opt.toString().includes(searchTerm);
            });
            setFilteredOptions([...options]);
        } else {
            setFilteredOptions(filterOptions[name]);
        }
    }, [searchTerm]);

    useEffect(() => {
        // close the dropdown if clicked outside of the dropdown
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [inputRef]);

    return (
        <div className={styles.container} ref={inputRef}>
            <label
                className={
                    searchTerm ? styles.label_visible : styles.label_hidden
                }
            >
                {name}
            </label>
            <div className={styles.dropdown}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onClick={() => setOpen(!open)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocusCapture={() => setOpen(!open)}
                />
                {searchTerm ? (
                    <IconButton
                        onClick={() => {
                            setSearchTerm("");
                            handleFilterChange(name, filterDefaults[name]);
                        }}
                    >
                        <Close fontSize="small" />
                    </IconButton>
                ) : (
                    ""
                )}
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? (
                        <ArrowDropUp fontSize="small" />
                    ) : (
                        <ArrowDropDown fontSize="small" />
                    )}
                </IconButton>
                {open ? (
                    <div className={styles.option_list}>
                        {filteredOptions.map((option, key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    handleSelect(option);
                                    setOpen(!open);
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default FilterDropdowns;
