import React, { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";

import { filterOptions } from "../utils";
import { debounce, IconButton } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

type FilterOptions = {
    size: string[];
    experience: number[];
    site: string[];
    salary: string[];
};

type Props = {
    name: keyof FilterOptions; // Specify that name should be one of the keys of FilterOptions
    placeholder: string;
};
function FilterDropdowns({ name, placeholder }: Props) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(
        filterOptions[name] ? filterOptions[name] : []
    );

    // const handleSearch = (text: string) => {
    //     const options = filteredOptions.filter((opt) => {
    //         return opt.toString().includes(text);
    //     });
    //     setFilteredOptions(options.length ? [...options] : filterOptions[name]);
    // };

    useEffect(() => {
        if(searchTerm.length > 0) {
            const options = filteredOptions.filter((opt) => {
                return opt.toString().includes(searchTerm);
            });
            setFilteredOptions([...options]);
        } else {
            setFilteredOptions(filterOptions[name])
        }
    }, [searchTerm]);

    return (
        <div>
            <TextField
                variant="outlined"
                placeholder={placeholder}
                value={searchTerm}
                onClick={() => setOpen(!open)}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={() => setOpen(!open)}>
                            {open ? <ArrowDropUp /> : <ArrowDropDown />}
                        </IconButton>
                    ),
                }}
            />
            <Collapse in={open}>
                <List>
                    {filteredOptions
                        .filter((opt) => {
                            return opt.toString().includes(searchTerm);
                        })
                        .map((option) => (
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary={option} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                </List>
            </Collapse>
        </div>
    );
}

export default FilterDropdowns;
