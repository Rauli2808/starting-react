import React, { useContext } from "react";
import DirectoryContext from "../context/DirectoryContext";

const Filter = () => {
    const { state: {filter}, dispatch } = useContext(DirectoryContext);    

    return (
        <input value={filter} placeholder='Start typing...' onChange={(event) => dispatch({type: 'SET_FILTER', payload: event.target.value})}></input>
    )
}

export default Filter;