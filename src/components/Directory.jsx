import React, { useContext } from "react";
import "../App.css";
import RenderRow from "./RenderRow";
import DirectoryContext from "../context/DirectoryContext";

const Directory = () => {
    const { state: {directory, filter}, dispatch } = useContext(DirectoryContext);

    const clicked = (row) => {
		if(row)
			dispatch({type: 'SET_SELECTED', payload: row});
	}

    return (
        <table width="80%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                {directory.filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
                .map(row => <RenderRow item={row} clicked={clicked}></RenderRow>)}
            </tbody>
        </table>
    );
}

export default Directory;