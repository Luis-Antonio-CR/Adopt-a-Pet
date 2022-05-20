import React from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";

import "../style/Search.css"

const Search = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const handleSubmit = (e) => {

        const title = e.target.value;

        setSearchParams(createSearchParams({ title : title }));
        
    }

    return(
        <form onChange={handleSubmit} className="search-form">
            <input type="text" className="search-text" placeholder="Search"/>

        </form>
    )
}

export default Search;