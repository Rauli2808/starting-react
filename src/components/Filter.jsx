import React from "react";

const Filter = ({ filter, filterSet }) => {
    return (
        <input value={filter} placeholder='Start typing...' onChange={(event) => filterSet(event.target.value)}></input>
    )
}

export default Filter;