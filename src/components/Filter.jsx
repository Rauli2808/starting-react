import React, { useContext } from "react";
import DirectoryContext from "../context/DirectoryContext";

const Filter = () => {
    const { filter, filterSet } = useContext(DirectoryContext);    

    return (
        <input value={filter} placeholder='Start typing...' onChange={(event) => filterSet(event.target.value)}></input>
    )
}

export default Filter;